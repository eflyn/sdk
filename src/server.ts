import { JSONRPCResponse, JSONRPCServer } from 'json-rpc-2.0';
import { EflynSdk, isValidOrigin, WrappedJSONRPCRequest, WrappedJSONRPCResponse } from './index';
import { clientBridge } from './client-bridge';
import {
	constructEventOnServer,
	deserializeEvent, deserializeRequest,
	isEvent, isEventSource,
	isRequest, SDK_EVENT_KEY,
	serializeEvent,
	serializeResponse,
	WrappedJSONRPCEvent
} from './constants';
import EventEmitter from 'eventemitter3';

interface EflynSdkServerOptions {
	sdk: Partial<EflynSdk>;
	postMessageToProxies?: (message: string) => void;
	allowedOrigins?: string[];
	debug?: boolean;
}


/**
 * Make the SDK available to child windows via window.postMessage
 * @param options
 */
export function startServer(options: EflynSdkServerOptions): [EflynSdk, () => void] {
	const { sdk, postMessageToProxies } = options;


	const sdkEventEmitter = new EventEmitter();
	Object.assign(sdkEventEmitter, sdk);

	/**
	 * Server origin + any allowed origins declared here
	 */
	const allowedOrigins = Array.from(new Set([window.location.origin, ...(options.allowedOrigins ?? [])]));
	const debug = options.debug ?? false;

	// Helper function for conditional logging
	const log = (message: string, ...optionalParams: any[]) => {
		if (debug) {
			console.log(`server: ${message}`, ...optionalParams);
		}
	};

	log("Starting server with provided SDK", allowedOrigins);

	/**
	 * Build the server object based on all namespaces and methods available on the provided SDK object
	 */
	const sdkSchema: [string, string[]][] = Object.keys(sdk).map(namespace => {
		return [namespace, Object.keys(sdk[namespace])];
	});
	const server = new JSONRPCServer();
	for (const namespace of Object.keys(sdk)) {
		for (const method of Object.keys(sdk[namespace])) {
			server.addMethod(`${namespace}.${method}`, (args = []) => {
				log(`Invoking method '${namespace}.${method}' with arguments`, args);
				return sdk[namespace][method](...args);
			});
		}
	}

	server.addMethod('__getClientConfig', () => {
		return {
			allowedOrigins,
			sdkSchema,
		}
	})

	log("Server object built with methods from SDK");

	/**
	 * INPUT MECHANISM
	 * Retrieve requests posted to this window and pass to server for processing
	 */
	log("Event listener for 'message' added to window");
	window.addEventListener('message', serverWindowMessageHandler);
	function serverWindowMessageHandler(event: MessageEvent) {
		log("Received message event", event);
		if (!isValidOrigin(event.origin, allowedOrigins)) {
			log('Message from invalid origin', event);
			return;
		}
		/**
		 * Save reference for later broadcasting
		 */
		clientBridge.connect(event.origin, event.source as Window);

		log("Connected iframe service with event source");

		// Handle requests emitted on server window
		if (isRequest(event.data)) {
			const sdkRequest: WrappedJSONRPCRequest = deserializeRequest(event.data);
			/**
			 * SECONDARY CHECK FOR ANY REQUESTS COMING VIA PROXIES
			 */
			if (isValidOrigin(sdkRequest.origin, allowedOrigins)) {
				log("Processing SDK request", sdkRequest);
				server.receive(sdkRequest).then((jsonRPCResponse: JSONRPCResponse) => {
					const wrappedResponse: WrappedJSONRPCResponse = {
						...jsonRPCResponse,
						allowedOrigins,
					}
					log("Sending JSONRPC response", wrappedResponse);
					sendResponse(wrappedResponse, event.source as Window);
				});
			}
		}

		// Eflyn event was broadcast on server window
		if (isEventSource(event.data)) {
			const wrappedEvent: WrappedJSONRPCEvent = {
				...constructEventOnServer(event.data),
				allowedOrigins,
			}
			log("Broadcasting Eflyn event", event.data, wrappedEvent);
			broadcastEvent(wrappedEvent);
			sdkEventEmitter.emit(wrappedEvent.name, wrappedEvent.data);
		}
	}

	function broadcastEvent(event: WrappedJSONRPCEvent) {
		const eventMessage = serializeEvent(event);
		clientBridge.postMessageToAll(eventMessage, allowedOrigins);
		postMessageToProxies?.(eventMessage);
	}

	/**
	 * Output events and responses
	 */
	function sendResponse(resp: WrappedJSONRPCResponse, targetWindow: Window) {
		log("Broadcasting message", resp);
		const message = serializeResponse(resp);
		if (targetWindow !== window) {
			targetWindow.postMessage(message);
		} else {
			log("Broadcasting response (or event) message to all clients", message);
			postMessageToProxies?.(message);
		}
	}

	return [sdkEventEmitter as EflynSdk, () => {
		log("Removing 'message' event listener from window");
		window.removeEventListener('message', serverWindowMessageHandler);
	}]
}

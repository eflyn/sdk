import EventEmitter from 'eventemitter3';
import { JSONRPCClient, JSONRPCRequest } from 'json-rpc-2.0';
import { EflynSdk, getControllers, getInvokes, WrappedJSONRPCResponse } from './index';
import {
	deserializeEvent, deserializeResponse,
	isEvent,
	isResponse,
	serializeRequest,
	WrappedJSONRPCRequest
} from './constants';
import { createEsuiteClient } from '@eflyn/esuite-client';
import { nanoid } from 'nanoid';

let connectedSdk: [EflynSdk, () => void];


function browserWindowBroadcast(message) {
	function postMessageToTop(targetOrigin) {
		// Define a function to post the message recursively to the parent
		function postToParent(windowReference) {
			// Check if we've reached the top window
			if (windowReference === window.top) {
				// If this is the top window, post the message to itself (optional, depending on your needs)
				windowReference.postMessage(message, targetOrigin);
			} else {
				// Post the message to the parent
				windowReference.parent.postMessage(message, targetOrigin);
				// Recurse to try sending from the parent, in case we're not yet at the top
				postToParent(windowReference.parent);
			}
		}

		// Start the process from the current window
		postToParent(window);
	}
	// Need to secure this
	postMessageToTop('*');
}


/**
 * Connect to the SDK via window.top MessagePort
 * @param debug Optional debug flag to enable console logs. Default is false.
 */
export function connectClient(debug: boolean = false): EflynSdk {
	// Helper function to conditionally log messages based on the debug flag
	const log = (message: string, ...optionalParams: any[]) => {
		if (debug) {
			console.log(`client: ${message}`, ...optionalParams);
		}
	};


	if (connectedSdk) {
		return connectedSdk[0];
	}

	const processing: WrappedJSONRPCRequest[] = [];

	log("Starting to connect client");

	/**
	 * Start a new object to represent the SDK using a new EventEmitter object
	 * (we use this to capture and pass events later)
	 */
	const sdkProxy = new EventEmitter() as EflynSdk;
	log("SDK Proxy created with new EventEmitter");

	/**
	 * OUTPUT MECHANISM
	 * Initiate a new JSONRPCClient that will "broadcast" requests to window.top (either webview, dashboard or player)
	 */
	const client = new JSONRPCClient((rpcRequest: JSONRPCRequest) => {
		log("JSONRPCRequest sending", rpcRequest);

		const initialRequest: WrappedJSONRPCRequest = {
			...rpcRequest,
			origin: window.location.origin,
		}

		processing.push(initialRequest);
		/**
		 * Single point of "output" for client requests
		 */
		browserWindowBroadcast(serializeRequest(initialRequest));

	},() => `${nanoid()}`);

	log("JSONRPCClient initiated");

	/**
	 * INPUT MECHANISM
	 * Expect to receive responses and events and pass to RPC client.
	 * Typically, we're listening for messages on the window that
	 * can be parsed and passed to the client RPC OR emitted.
	 */
	window.addEventListener('message', clientWindowMessageHandler);
	log("Event listener for 'message' added");

	function clientWindowMessageHandler(event: MessageEvent) {
		log("Received message event", event);

		/**
		 * Pass responses back to client
		 */
		if (isResponse(event.data)) {
			const sdkResponse: WrappedJSONRPCResponse = deserializeResponse(event.data);
			processing.splice(processing.findIndex(({ id }) => id === sdkResponse.id), 1);
			log("Passing response back to client", sdkResponse);
			client.receive(sdkResponse);
		}

		/**
		 * Emit events captured for the eflyn namespace
		 */
		if (isEvent(event.data)) {
			const { name, data } = deserializeEvent(event.data);
			sdkProxy.emit(name, data);
		}
	}

	/**
	 * Construct the EflynSdk object
	 */
	const eflynSdk = new EflynSdk();
	const invokes = getInvokes();
	const controllers = getControllers();
	for (const [prefix, controllerClass, controller] of controllers) {
		for (const [invokableKey] of invokes.filter(
			([a, cc]) => controllerClass === cc,
		)) {
			if (!eflynSdk[prefix]) {
				eflynSdk[prefix] = {};
			}
			eflynSdk[prefix][invokableKey] = (...args: any[]) => client.request(`${prefix}.${invokableKey}`, args);
		}
	}
	const esuiteClient = createEsuiteClient();
	Object.keys(esuiteClient).forEach((namespace, ind, el) => {
		const methods = Object.keys(esuiteClient[namespace]);
		if (!eflynSdk[namespace]) {
			eflynSdk[namespace] = {};
		}
		for (const method of methods) {
			eflynSdk[namespace][method] = (...args: any[]) => client.request(`${namespace}.${method}`, args);
		}
	});
	Object.assign(sdkProxy, eflynSdk);

	/**
	 * Cache the SDK Proxy object
	 */
	connectedSdk = [sdkProxy, () => window.removeEventListener('message', clientWindowMessageHandler)];
	return connectedSdk[0];
}


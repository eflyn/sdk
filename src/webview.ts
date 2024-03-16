import { clientBridge } from './client-bridge';
import { deserializeEvent, deserializeRequest, deserializeResponse, isEvent, isRequest, isResponse } from './constants';

/**
 * Forward requests to player, responses, and events to connected iframes
 * @param postMessageToServer
 * @param debug Optional debug flag to enable console logs. Default is false.
 */
export function startWindowProxy(postMessageToServer: (message: string) => void, debug: boolean = false) {
	// Helper function for conditional logging
	const log = (message: string, ...optionalParams: any[]) => {
		if (debug) {
			console.log(`windowProxy: ${message}`, ...optionalParams);
		}
	};

	function windowProxyHandler(event: MessageEvent) {
		log("Received message event", event);

		/**
		 * Save reference to connected iframe
		 */
		clientBridge.connect(event.origin, event.source as Window);
		log("Connected iframe service with event source");

		/**
		 * Forward requests to player (from self and sub frames calling window.top)
		 */
		if (isRequest(event.data)) {
			log("Forwarding request to player", event.data);
			/**
			 * ::: HIGHLY DANGEROUS :::
			 * NOTE that any child client window using the connectClient script can
			 * pass requests through the WindowProxy to the SDK Server as if
			 * they were coming from the window proxy origin because the proxy
			 * being ephemeral does not keep track of allowedOrigins.
			 *
			 * To secure against this we do a 2-step validation:
			 *
			 * 1. We ensure that the origin property of Events and Responses
			 * 		is accurate to the window posting the message.
			 *
		   * 2. The server checks the origin of the request against
			 * 		its internal whitelist even after validating
			 * 	  the source of the message (i.e. the WindowProxy)
			 */
			const req = deserializeRequest(event.data);
			if (req.origin === event.origin) {
				postMessageToServer(event.data);
			}
		}

		/**
		 * Forward responses to iframes
		 */
		if (isResponse(event.data)) {
			log("Forwarding response to iframes", event.data);
			const { allowedOrigins } = deserializeResponse(event.data);
			clientBridge.postMessageToAll(event.data, allowedOrigins);
		}

		/**
		 * Forward events to iframes
		 */
		if (isEvent(event.data)) {
			const { allowedOrigins } = deserializeEvent(event.data);
			clientBridge.postMessageToAll(event.data, allowedOrigins);
		}
	}

	window.addEventListener('message', windowProxyHandler);
	log("Event listener for 'message' added");

	return () => {
		log("Removing 'message' event listener from window");
		window.removeEventListener('message', windowProxyHandler);
	}
}

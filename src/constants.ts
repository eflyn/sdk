import { JSONRPCRequest, JSONRPCResponse } from 'json-rpc-2.0';

/**
 * Connect SDK to platform
 */
export const PUBLIC_EFLYN_EVENT_NAMESPACE = 'eflyn.';
export const SDK_KEY_PREFIX = '__eflynSdkServer';
export const SDK_REQUEST_KEY = `${SDK_KEY_PREFIX}Request:`;
export const SDK_RESPONSE_KEY = `${SDK_KEY_PREFIX}Response:`;
export const SDK_EVENT_KEY = `${SDK_KEY_PREFIX}Event:`;


export const isRequest = (message: string) => message.indexOf(SDK_REQUEST_KEY) === 0;
export const isResponse = (message: string) => message.indexOf(SDK_RESPONSE_KEY) === 0;
export const isEvent = (message: string) => message.indexOf(SDK_EVENT_KEY) === 0;


export type WrappedJSONRPCRequest = JSONRPCRequest & {
	origin: string;
}

export function deserializeRequest(message: string): WrappedJSONRPCRequest {
	return JSON.parse(message.slice(SDK_REQUEST_KEY.length));
}

export function serializeRequest(req: WrappedJSONRPCRequest): string {
	return `${SDK_REQUEST_KEY}${JSON.stringify(req)}`;
}

export function deserializeResponse(message: string): WrappedJSONRPCResponse {
	return JSON.parse(message.slice(SDK_RESPONSE_KEY.length));
}

export function serializeResponse(req: WrappedJSONRPCResponse): string {
	return `${SDK_RESPONSE_KEY}${JSON.stringify(req)}`;
}


export function deserializeEvent(message: string): WrappedJSONRPCEvent {
	return JSON.parse(message.slice(SDK_EVENT_KEY.length));
}

export function serializeEvent(req: WrappedJSONRPCEvent): string {
	return `${SDK_EVENT_KEY}${JSON.stringify(req)}`;
}

export type WrappedJSONRPCResponse = JSONRPCResponse & {
	allowedOrigins: string[];
}


export type WrappedJSONRPCEvent = {
	name: string;
	data?: any;
	allowedOrigins: string[];
}




export function constructEventOnServer(message: string): { name: string, data?: any } {
	const splitInd = message.indexOf(':');
	let dataStr;
	let name;
	if (splitInd > -1) {
		name = message.slice(0, splitInd);
		dataStr = message.slice(splitInd + 1);
	} else {
		name = message;
	}
	return {
		name: name.slice(PUBLIC_EFLYN_EVENT_NAMESPACE.length),
		data: dataStr ? JSON.parse(dataStr) : null,
	}
}

export function isEventSource(message: string) {
	return message.indexOf(PUBLIC_EFLYN_EVENT_NAMESPACE) === 0;
}

export function isValidOrigin(origin: string, allowedOrigins: string[]): boolean {
	try {
		const url = new URL(origin);
		const originHostParts = url.hostname.split('.');

		return allowedOrigins.some(allowedOrigin => {
			const pattern = new URL(allowedOrigin.replace(/\*/g, 'wildcard-placeholder'));
			const patternHostParts = pattern.hostname.split('.');

			if (url.protocol !== pattern.protocol) {
				return false; // Protocol (scheme) doesn't match
			}

			// If pattern contains a wildcard, it must only be in the subdomain part
			if (patternHostParts.includes('wildcard-placeholder')) {
				if (originHostParts.length < patternHostParts.length) {
					return false; // Origin has fewer domain parts than the pattern
				}

				return patternHostParts.every((part, index) => {
					if (part === 'wildcard-placeholder') return true; // Wildcard matches any part
					// Match the corresponding part of the host
					return part === originHostParts[index + (originHostParts.length - patternHostParts.length)];
				});
			} else {
				return url.hostname === pattern.hostname; // Direct match without wildcards
			}
		});
	} catch (error) {
		return false; // Invalid URL format or other error
	}
}

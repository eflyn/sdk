import { isValidOrigin } from './constants';

/**
 * Utilized by the server and webview to track connected
 * clients
 */
class ClientBridge {
	private clientWindows: { origin: string, clientWindow: Window }[] = []; // Array to hold references to client windows

	includes(clientWindow: Window) {
		return !!this.getByWindow(clientWindow);
	}

	getByWindow(clientWindow: Window) {
		return this.clientWindows.find(cw => cw.clientWindow === clientWindow);
	}

	connect(origin: string, clientWindow: Window) {
		if (clientWindow !== window && !this.includes(clientWindow)) {
			this.clientWindows.push({ origin, clientWindow });
		}
	}

	postMessageToAll(message: string, allowedOrigins: string[]) {
		this.clientWindows = this.clientWindows.filter((source) => {
			try {
				if (isValidOrigin(source.origin, allowedOrigins)) {
					source.clientWindow.postMessage(message, { targetOrigin: source.origin });
				}
				return true; // Keep source in the array if postMessage succeeds
			} catch (error) {
				return false; // Remove source from the array if postMessage fails
			}
		});
	}
}

export const clientBridge = new ClientBridge();

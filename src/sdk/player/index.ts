/**
 * ## Player
 * This module is tailored for media playback, supporting various formats and ensuring seamless audio-visual experiences on the kiosk.
 *
 * @packageDocumentation
 */
import { Sdk, SdkController } from '../admin';

@SdkController('player')
export class Player {

	/**
	 * Clear all additional display windows.
	 * @example
	 * ```javascript
	 * eflyn.player.clearDisplays();
	 * ```
	 */
	@Sdk()
	clearDisplays(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/** @internal */
	@Sdk()
	executeJavascript(code: string): Promise<any> {
		throw new Error('Not Implemented');
	}

	/** @internal */
	@Sdk()
	postMessage(message: string): Promise<void> {
		throw new Error('Not Implemented');
	}

	/** @internal */
	@Sdk()
	postMessageToWebviews(message: string, allowedOrigins: string[]): Promise<void> {
		throw new Error('Not Implemented');
	}


	/**
	 * @internal
	 * Allow the player window to submit events
	 * */
	@Sdk()
	emitSync(name: string, data?: any): void {
		throw new Error('Not Implemented');
	}

	/**
	 * Reload the kiosk.
	 * @example
	 * ```javascript
	 * eflyn.player.reload();
	 * ```
	 */
	@Sdk()
	reload(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Perform a hard reset, clearing all player storage and re-downloading
	 * the player files.
	 * @example
	 * ```javascript
	 * eflyn.player.reset();
	 * ```
	 */
	@Sdk()
	reset(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Exit the kiosk application. Note this will unsecure the sysetem.
	 * @example
	 * ```javascript
	 * eflyn.player.exit();
	 * ```
	 */
	@Sdk()
	exit(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/** @internal */
	@Sdk()
	openDevTools(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/** @internal */
	@Sdk()
	getVersion(): Promise<'archive' | 'remote' | 'local'> {
		throw new Error('Not Implemented');
	}

	// /** @internal */
	// use(namespace: string, method: string, ...args: any[]): Promise<any>;
	//
	// /** @internal */
	// getSdkSync(): [string, string[]][];
	//
	// /** @internal */
	// setSdkSync(schema: [string, string[]][]): void;

	/** @internal */
	@Sdk()
	click(control: any): any {
		throw new Error('Not Implemented');
	}

	/**
	 * Emulates a barcode scan.
	 * @example
	 * ```javascript
	 * eflyn.player.emulateBarcodeScan(code);
	 * ```
	 */
	@Sdk()
	emulateBarcodeScan(code: string): any {
		throw new Error('Not Implemented');
	}

	/**
	 * Updates an additional display
	 * @example
	 * ```javascript
	 * eflyn.player.updateDisplay();
	 * ```
	 */
	@Sdk()
	updateDisplay(update: any): any {
		throw new Error('Not Implemented');
	}

	@Sdk()
	getRemoteDesktopSources(): Promise<{ name: string, id: string }[]> {
		throw new Error('Not Implemented');
	}
}

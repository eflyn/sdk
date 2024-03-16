import {Activation, EsuiteApp, Kiosk, KioskApp, Location} from '@eflyn/esuite-client';
import { Sdk, SdkController } from '../admin';

/**
 * ## App
 * This module is designed for managing and handling various applications running on the kiosk platform.
 *
 * @packageDocumentation
 */

@SdkController('app')
export class App {
	@Sdk()
	getApiSync(): { onSends: string[][]; invokes: string[][] } {
		throw new Error('Not Implemented');
	}
	/**
	 * Open a specific EsuiteApp with a given ID. This method
	 * will navigate the kiosk to the specified app.
	 * @param options An object containing the target EsuiteApp and its ID.
	 * @example
	 * ```javascript
	 * // Call this method as follows:
	 * eflyn.app.open({ app: 'shopify_checkout', id: 123 });
	 * ```
	 */
	@Sdk()
	open(options: { app: EsuiteApp; id: number }): Promise<boolean> {
		throw new Error('Not Implemented');
	}

	/**
	 * Retrieve configuration and environment data for custom apps.
	 * This information includes details about the kiosk, kiosk app properties,
	 * and app-specific data.
	 * @returns A promise that resolves with the configuration data.
	 * @example
	 * ```javascript
	 * // Call this method as follows:
	 * eflyn.app.getConfig().then(config => {
	 *   console.log(config);
	 * });
	 * ```
	 */
	@Sdk()
	getConfig(): Promise<{
		activation: Activation;
		app: KioskApp;
		kiosk: Kiosk;
		location: Location
	}> {
		throw new Error('Not Implemented');
	}
}

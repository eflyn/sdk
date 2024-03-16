
/**
 * ## Platform
 * This module contains core functionalities and services essential to the Eflyn Kiosk Platform's operation.
 *
 * @packageDocumentation
 */
import { PlatformDisplay, PlatformState } from '@eflyn/esuite-client';
import { Sdk, SdkController } from '../admin';

@SdkController('platform')
export class Platform {
	/**
	 * Returns the unique hardware ID assigned to this particular kiosk.
	 * @example
	 * ```javascript
	 * eflyn.platform.getHardwareId();
	 * ```
	 */
	@Sdk()
	relaunch(): Promise<void>  { throw new Error('Not Implemented') };

	/**
	 * Get the current platform status for this kiosk.
	 * @example
	 * ```javascript
	 * eflyn.platform.getStatus()  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	getStatus(): Promise<PlatformState>  { throw new Error('Not Implemented') };

	/** @internal */
	@Sdk()
	isProdSync(): boolean  { throw new Error('Not Implemented') };

	/** @internal */
	@Sdk()
	getAllDisplaysSync(): PlatformDisplay[]  { throw new Error('Not Implemented') };

	/** @internal */
	@Sdk()
	getPrimaryDisplaySync(): PlatformDisplay  { throw new Error('Not Implemented') };

	@Sdk()
	getConfig(): Promise<any>  { throw new Error('Not Implemented') };

	@Sdk()
	setConfig(c: any): Promise<void>  { throw new Error('Not Implemented') };

	@Sdk()
	ping(): Promise<void>  { throw new Error('Not Implemented') };
}

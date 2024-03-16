import { Sdk, SdkController } from '../admin';

/**
 * ## Update
 * This module facilitates the updating of kiosk software and applications, ensuring up-to-date features and security.
 *
 * @packageDocumentation
 */
@SdkController('update')
export class Update {
	/**
	 * Get the current version number
	 * @example
	 * ```javascript
	 * eflyn.update.getVersionSync();
	 * ```
	 */
	@Sdk()
	getVersionSync(): string {
		throw new Error('Not Implemented');
	}

	/**
	 * Reinstalls the platform version. Uses the profile version (if available)
	 * @example
	 * ```javascript
	 * eflyn.update.reinstall();
	 * ```
	 */
	@Sdk()
	reinstall(version?: string): Promise<void> {
		throw new Error('Not Implemented');
	}
}

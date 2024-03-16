/**
 * ## Reset
 * This module offers functionalities to reset and restore kiosk settings and applications to predefined states.
 *
 * @packageDocumentation
 */
import { Sdk, SdkController } from '../admin';


@SdkController('reset')
export class Reset {
	/**
	 * Get the most recent KioskRecord
	 * @example
	 * ```javascript
	 * eflyn.reset.resetPlayer(reason, options);
	 * ```
	 */
	@Sdk()
	resetPlayer(
		reason: string,
		options?: {
			messageHtml?: string;
			resetTimer?: number;
		}
	): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Get the most recent KioskRecord
	 * @example
	 * ```javascript
	 * eflyn.reset.lock(reason);
	 * ```
	 */
	@Sdk()
	lock(reason: string): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Get the most recent KioskRecord
	 * @example
	 * ```javascript
	 * eflyn.reset.unlock(reason);
	 * ```
	 */
	@Sdk()
	unlock(reason: string): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Get the most recent KioskRecord
	 * @example
	 * ```javascript
	 * eflyn.reset.resetTimeout(reason);
	 * ```
	 */
	@Sdk()
	resetTimeout(reason: any): Promise<void> {
		throw new Error('Not Implemented');
	}
}

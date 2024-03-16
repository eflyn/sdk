/**
 * ## Storage
 * This module provides solutions for data storage and retrieval, ensuring data integrity and accessibility in the kiosk environment.
 *
 * @packageDocumentation
 */
import { Sdk, SdkController } from '../admin';

@SdkController('storage')
export class Storage {
	/**
	 * Get a value from the storage key-value store.
	 * @example
	 * ```javascript
	 * eflyn.storage.get(key: string, defaultValue?: any);
	 * ```
	 */
	@Sdk()
	get(key: string, defaultValue?: any): Promise<any> {
		throw new Error('Not Implemented');
	}

	/**
	 * Sets a value on the storage key-value store.
	 * @example
	 * ```javascript
	 * eflyn.storage.set(key: string, value: any);
	 * ```
	 */
	@Sdk()
	set(key: string, value: any): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Remove a value from the storage key-value store.
	 * @example
	 * ```javascript
	 * eflyn.storage.remove();
	 * ```
	 */
	@Sdk()
	remove(key: string): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Clean the entire storage key-value database.
	 * @example
	 * ```javascript
	 * eflyn.storage.clear();
	 * ```
	 */
	@Sdk()
	clear(): Promise<void> {
		throw new Error('Not Implemented');
	}
}

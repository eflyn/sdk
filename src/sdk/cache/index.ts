import { Sdk, SdkController } from '../admin';

/**
 * ## Cache
 * This module makes it easy to cache media such as images and videos locally
 * on your kiosk to improve performance and support offline functionality.
 *
 * @packageDocumentation
 */
@SdkController('cache')
export class Cache {
	/**
	 * Returns the current cache size.
	 * @example
	 * ```javascript
	 * eflyn.cache.getSize();
	 * ```
	 */
	@Sdk()
	getSize(): Promise<number> {
		throw new Error('Not Implemented');
	}

	/**
	 * Clear all cached files.
	 * @example
	 * ```javascript
	 * eflyn.cache.clear();
	 * ```
	 */
	@Sdk()
	clear(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Cache the file located at a particular URL.
	 * @example
	 * ```javascript
	 * eflyn.cache.url(url);
	 * ```
	 */
	@Sdk()
	url(url: string): Promise<void> {
		throw new Error('Not Implemented');
	}
}

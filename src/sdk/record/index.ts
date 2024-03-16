/**
 * ## Record
 * This module is designed for recording and storing user interactions and transactions performed on the kiosk.
 *
 * @packageDocumentation
 */

import { KioskRecordResponseDto, UpdateKioskRecordDto } from '@eflyn/esuite-client';
import { Sdk, SdkController } from '../admin';

@SdkController('record')
export class Record {
	/**
	 * Get the most recent KioskRecord
	 * @example
	 * ```javascript
	 * eflyn.record.get();
	 * ```
	 */
	@Sdk()
	get(): Promise<KioskRecordResponseDto> {
		throw new Error('Not Implemented');
	}

	/**
	 * Update a KioskRecord
	 * @example
	 * ```javascript
	 * eflyn.record.update(options);
	 * ```
	 */
	@Sdk()
	update(
		data: any,
		tags: string[],
		removeTags?: string[]
	): Promise<KioskRecordResponseDto> {
		throw new Error('Not Implemented');
	}

	/**
	 * Update a KioskRecord
	 * for eflyn app
	 * @example
	 * ```javascript
	 * eflyn.record.defaultUpdate(options);
	 * ```
	 */
	@Sdk()
	triggerUpdate(updates?: UpdateKioskRecordDto): Promise<KioskRecordResponseDto> {
		throw new Error('Not Implemented');
	}

	@Sdk()
	addTouchCount(): Promise<void> {
		throw new Error('Not Implemented');
	}
}

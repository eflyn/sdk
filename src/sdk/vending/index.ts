/**
 * ## Vending
 * This module is specifically designed for managing vending operations and functionalities within the kiosk system.
 *
 * @packageDocumentation
 */

import { DispenseItemDto, SetTempRequestDto } from './vending-options';
import { Sdk, SdkController } from '../admin';

@SdkController('vending')
export class Vending {
	/**
	 * Scan the vending machine to map shelves.
	 * @example
	 * ```javascript
	 * eflyn.vending.scan();
	 * ```
	 */
	@Sdk()
	scan(): Promise<any> {
		throw new Error('Not Implemented');
	}

	/**
	 * Get the vending machine scan results.
	 * @example
	 * ```javascript
	 * eflyn.vending.inquireScanResults();
	 * ```
	 */
	@Sdk()
	inquireScanResults(): Promise<any> {
		throw new Error('Not Implemented');
	}

	/**
	 * Get running state of the vending machine.
	 * @example
	 * ```javascript
	 * eflyn.vending.getRunningState();
	 * ```
	 */
	@Sdk()
	getRunningState(): Promise<any> {
		throw new Error('Not Implemented');
	}

	/**
	 * Dispense an item.
	 * @example
	 * ```javascript
	 * eflyn.vending.dispenseItem(dispenseItemDto);
	 * ```
	 */
	@Sdk()
	dispenseItem(dispenseItemDto: DispenseItemDto): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Returns the current temperature of the vending machine.
	 * @example
	 * ```javascript
	 * eflyn.vending.getCurrentTemp();
	 * ```
	 */
	@Sdk()
	getCurrentTemp(): Promise<any> {
		throw new Error('Not Implemented');
	}

	/**
	 * Sets the current temperature of the vending machine.
	 * @example
	 * ```javascript
	 * eflyn.vending.setTemperature(dto);
	 * ```
	 */
	@Sdk()
	setTemperature(dto: SetTempRequestDto): Promise<void> {
		throw new Error('Not Implemented');
	}
}

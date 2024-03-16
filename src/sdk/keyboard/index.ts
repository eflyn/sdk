/**
 * ## Keyboard
 * This module enables the integration and customization of on-screen keyboards for user input on the kiosk.
 *
 * @packageDocumentation
 */
import { Sdk, SdkController } from '../admin';


@SdkController('keyboard')
export class Keyboard {
	/**
	 * Open the on screen keyboard.
	 * @example
	 * ```javascript
	 * eflyn.keyboard.open()  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	open(): Promise<void>  { throw new Error('Not Implemented') };

	/**
	 * Close the on screen keyboard.
	 * @example
	 * ```javascript
	 * eflyn.keyboard.close()  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	close(): Promise<void>  { throw new Error('Not Implemented') };

	/**
	 * Move the keyboard up on the screen.
	 * @example
	 * ```javascript
	 * eflyn.keyboard.moveUp()  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	moveUp(): Promise<void>  { throw new Error('Not Implemented') };

	/**
	 * Move the keyboard down on the screen.
	 * @example
	 * ```javascript
	 * eflyn.keyboard.moveDown()  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	moveDown(): Promise<void>  { throw new Error('Not Implemented') };

	/** @internal */
	@Sdk()
	type(key: string): Promise<void>  { throw new Error('Not Implemented') };

	/** @internal */
	@Sdk()
	action(action: string): Promise<void>  { throw new Error('Not Implemented') };
}

/**
 * ## Message
 * This module facilitates the sending and receiving of messages and notifications within the kiosk system.
 *
 * @packageDocumentation
 */
import { ReceiptSubmit } from './receipt';
import { Sdk, SdkController } from '../admin';

@SdkController('message')
export class Message {
	/**
	 * Submit a message to various channels (email, sms, print) with
	 * built-in prompts and templates.
	 * @example
	 * ```javascript
	 * // Use the following method when a message needs to be submitted:
	 * eflyn.message.submit(options);
	 * ```
	 * @param options An object containing options for submitting this message.
	 */
	@Sdk()
	submit(options: ReceiptSubmit): Promise<void>  { throw new Error('Not Implemented') };
}

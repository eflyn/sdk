/**
 * ## Receipt
 * This module specializes in the generation and customization of digital and printed receipts for transactions made on the kiosk.
 *
 * @packageDocumentation
 */
import { ReceiptSubmit } from '../message/receipt';
import { Sdk, SdkController } from '../admin';


@SdkController('receipt')
export class Receipt {
	/**
	 * Submit a message to various channels (email, sms, print) with
	 * built-in prompts and templates.
	 * @example
	 * ```javascript
	 * // Use the following method when a message needs to be submitted:
	 * eflyn.receipt.submit(options);
	 * ```
	 * @param options An object containing options for submitting this message.
	 */
	@Sdk()
	submit(options: ReceiptSubmit): Promise<void> {
		throw new Error('Not Implemented');
	}
	@Sdk()
	submitDeferred(key: string, data?: any): Promise<void> {
		throw new Error('Not Implemented');
	}
}

/**
 * ## Payment
 * This module provides functionalities for processing and managing payments directly through the kiosk.
 *
 * @packageDocumentation
 */
import {
	PaymentTerminalCommandDto,
	PaymentTerminalCorrectionDto,
	PaymentTerminalDto, PaymentTerminalPurchaseDto, PaymentTerminalRefundDto, PaymentTerminalTransaction } from '@eflyn/esuite-client';
import { PaymentApproveOptions } from './payment-approve-options';
import { Sdk, SdkController } from '../admin';

@SdkController('payment')
export class Payment {
	/**
	 * Process an approved payment on the kiosk using a pre-built
	 * workflow and components.
	 * @example
	 * ```javascript
	 * // Use the following method when a message needs to be submitted:
	 * eflyn.payment.approve(options);
	 * ```
	 * @param options An object containing options for processing a payment.
	 */
	@Sdk()
	approve(
		options: PaymentApproveOptions
	): Promise<PaymentTerminalTransaction>  { throw new Error('Not Implemented') };

	/**
	 * Process a purchase transaction with a payment terminal.
	 * @example
	 * ```javascript
	 * eflyn.payment.purchase(dto)  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	purchase(
		purchaseDto: PaymentTerminalPurchaseDto,
	): Promise<PaymentTerminalTransaction>  { throw new Error('Not Implemented') };

	/**
	 * Process a refund transaction with a payment terminal.
	 * @example
	 * ```javascript
	 * eflyn.payment.refund(dto)  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	refund(
		refundDto: PaymentTerminalRefundDto,
	): Promise<PaymentTerminalTransaction>  { throw new Error('Not Implemented') };

	/**
	 * Process a refund using a dialog
	 * @param options
	 */
	@Sdk()
	refundDialog(
		options: PaymentApproveOptions
	): Promise<PaymentTerminalTransaction>  { throw new Error('Not Implemented') };

	/**
	 * Process a correction/void transaction with a payment terminal.
	 * @example
	 * ```javascript
	 * eflyn.payment.correction(dto)  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	correction(
		voidDto: PaymentTerminalCorrectionDto,
	): Promise<PaymentTerminalTransaction>  { throw new Error('Not Implemented') };

	/**
	 * Cancel a running transaction or clear the terminal.
	 * @example
	 * ```javascript
	 * eflyn.payment.cancel(dto)  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	cancel(
		cancelDto: PaymentTerminalDto,
	): Promise<PaymentTerminalTransaction>  { throw new Error('Not Implemented') };

	/**
	 * Specialized commands for certain devices (such as initialize)
	 * @example
	 * ```javascript
	 * eflyn.payment.command(dto)  { throw new Error('Not Implemented') };
	 * ```
	 */
	@Sdk()
	command(
		commandDto: PaymentTerminalCommandDto,
	): Promise<PaymentTerminalTransaction>  { throw new Error('Not Implemented') };
}

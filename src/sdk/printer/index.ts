
/**
 * ## Printer
 * This module handles all printing-related tasks, allowing the kiosk to produce receipts, tickets, and other printed materials.
 *
 * @packageDocumentation
 */

import { PrinterResponse, PrintHtmlDto } from './printer-status';
import { PlatformPrinter } from '@eflyn/esuite-client';
import { Sdk, SdkController } from '../admin';
export * from './printer-status';

@SdkController('printer')
export class Printer {
	@Sdk()
	printHtml(printDto: PrintHtmlDto): Promise<PrinterResponse> {
		throw new Error('Not Implemented');
	}

	@Sdk()
	getPrinterList(): Promise<PlatformPrinter[]> {
		throw new Error('Not Implemented');
	}
}

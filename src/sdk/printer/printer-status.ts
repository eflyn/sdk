
export enum PrinterStatus {
	Success = 'success',
	Error = 'error',
}
export enum PrintOptionsMarginType {
	Default = 'default',
	None = 'none',
	PrintableArea = 'printableArea',
	Custom = 'custom',
}


export interface PrintOptions {
	copies?: number;

	pageRanges?: any;

	pageSize?: any;

	scaleFactor?: number;

	silent?: boolean;

	margins?: PrintOptionsMargins;
}

export class PrinterPrintDto {
	options?: PrintOptions;

	printerName: string | '_PDF';
}

export class PrinterResponse {
	error?: string;

	status: PrinterStatus;
}

export class PrintHtmlDto extends PrinterPrintDto {
	html: string;
}

export interface PrinterPrintDto {
	options?: PrintOptions;

	printerName: string | '_PDF';
}

export interface PrintHtmlDto extends PrinterPrintDto {
	html: string;
}


export interface PrintOptionsMargins {
	/**
	 * Can be `default`, `none`, `printableArea`, or `custom`. If `custom` is chosen,
	 * you will also need to specify `top`, `bottom`, `left`, and `right`.
	 */
	marginType?: PrintOptionsMarginType;
	/**
	 * The top margin of the printed web page, in pixels.
	 */
	top?: number;
	/**
	 * The bottom margin of the printed web page, in pixels.
	 */
	bottom?: number;
	/**
	 * The left margin of the printed web page, in pixels.
	 */
	left?: number;
	/**
	 * The right margin of the printed web page, in pixels.
	 */
	right?: number;
}

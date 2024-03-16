/**
 * This event is emitted any time a barcode is scanned with a barcode scanner connected to your kiosk.
 *
 * @example
 *
 * // also equivalent to
 *
 * window.addEventListener('eflyn.barcode.read', (event) => {
 *   alert(event.data.code);
 * });
 */
export interface BarcodeReadEvent {
	type: 'eflyn.barcode.read';
	code: string;
}

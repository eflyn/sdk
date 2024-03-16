/**
 * ## RGB
 * This module controls and customizes the RGB lighting and display elements of the kiosk for an enhanced aesthetic appeal.
 *
 * @packageDocumentation
 */


import { RgbState } from './rgb-state.enum';
import { Sdk, SdkController } from '../admin';

@SdkController('rgb')
export class Rgb {
	@Sdk()
	changeRgbColor(index: number, color: number, state: RgbState): Promise<any> {
		throw new Error('Not Implemented');
	}

	@Sdk()
	changeMultipleRgbColor(rgbInfos: {index: number, color: number, state: RgbState}[]): Promise<any> {
		throw new Error('Not Implemented');
	}

	@Sdk()
	changeRgbByState(state: RgbState, color?: string): Promise<any> {
		throw new Error('Not Implemented');
	}

}

export * from './rgb-state.enum';

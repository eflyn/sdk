import { Sdk, SdkController } from '../admin';

export interface CheckEmailOptions {
	email: string;
}

@SdkController('helpers')
export class Helpers {
	@Sdk()
	checkEmail(options: CheckEmailOptions): Promise<any>  { throw new Error('Not Implemented') };
}

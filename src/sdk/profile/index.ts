
/**
 * ## Profile
 * This module manages user profiles, including preferences and settings, for a personalized kiosk experience.
 *
 * @packageDocumentation
 */
import { ProfileAuthLink } from './profile-auth.link';

export * from './index';
export * from './profile-auth.link';

import { KioskInfo } from '@eflyn/esuite-client';
import { Sdk, SdkController } from '../admin';

export interface KioskProfile extends KioskInfo {
	id: number;

	name: string;

	width: number;

	height: number;

	password: string;

	username: string;

	preview?: boolean;

	pinSecret: string;

	pin: string;
}

@SdkController('profile')
export class Profile {
	/** @internal */
	@Sdk()
	checkPin(token: string): Promise<boolean> {
		throw new Error('Not Implemented');
}

	/** @internal */
	@Sdk()
	getAuthLink(): Promise<ProfileAuthLink> {
		throw new Error('Not Implemented');
}

	/**
	 * Check if the kiosk is connected synchronously.
	 * @example
	 * ```javascript
	 * eflyn.profile.isConnectedSync();
	 * ```
	 */
	@Sdk()
	isConnectedSync(): any {
		throw new Error('Not Implemented');
}

	/**
	 * Sign out of the current kiosk profile.
	 * @example
	 * ```javascript
	 * eflyn.profile.logout();
	 * ```
	 */
	@Sdk()
	logout(): any {
		throw new Error('Not Implemented');
	}

	/**
	 * Reset the current profile.
	 * @example
	 * ```javascript
	 * eflyn.profile.reset();
	 * ```
	 */
	@Sdk()
	reset(): any {
		throw new Error('Not Implemented');
}

	/**
	 * Check if the kiosk is connected to MyEflyn and the internet.
	 * @example
	 * ```javascript
	 * eflyn.profile.isConnected();
	 * ```
	 */
	@Sdk()
	isConnected(): Promise<boolean> {
		throw new Error('Not Implemented');
}

	/**
	 * Attempt to reconnect to MyEflyn.
	 * @example
	 * ```javascript
	 * eflyn.profile.reconnect();
	 * ```
	 */
	@Sdk()
	reconnect(): Promise<any> {
		throw new Error('Not Implemented');
}

	/**
	 * Get the current profile synchronously.
	 * @example
	 * ```javascript
	 * eflyn.profile.getProfileSync();
	 * ```
	 */
	@Sdk()
	getProfileSync(): any {
		throw new Error('Not Implemented');
}

	/**
	 * Get the current kiosk profile.
	 * @example
	 * ```javascript
	 * eflyn.profile.getProfile();
	 * ```
	 */
	@Sdk()
	getProfile(): Promise<any> {
		throw new Error('Not Implemented');
}

	/**
	 * Set the current kiosk profile synchronously.
	 * @example
	 * ```javascript
	 * eflyn.profile.setProfileSync(p);
	 * ```
	 */
	@Sdk()
	setProfileSync(p: any): any {
		throw new Error('Not Implemented');
}

	/**
	 * Set the current kiosk profile.
	 * @example
	 * ```javascript
	 * eflyn.profile.setProfile(p);
	 * ```
	 */
	@Sdk()
	setProfile(p: any): any {
		throw new Error('Not Implemented');
}

	/**
	 * Toggle preview mode.
	 * @example
	 * ```javascript
	 * eflyn.profile.setPreview(preview);
	 * ```
	 */
	@Sdk()
	setPreview(preview: boolean): any {
		throw new Error('Not Implemented');
}
}

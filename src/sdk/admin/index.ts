import 'reflect-metadata';

// Metadata keys
const CONTROLLERS_METADATA_KEY = 'EflynSdk:controllers';
const INVOKES_METADATA_KEY = 'EflynSdk:invokes';
const ONSENDS_METADATA_KEY = 'EflynSdk:onSends';

// SdkController decorator
export function SdkController(namespace: string) {
	return function <T extends { new (...args: any[]): {} }>(target: T) {
		return class extends target {
			constructor(...args: any[]) {
				super(...args);
				const controllers = Reflect.getMetadata(CONTROLLERS_METADATA_KEY, Reflect) || [];
				controllers.push([namespace, target, this]);
				Reflect.defineMetadata(CONTROLLERS_METADATA_KEY, controllers, Reflect);
			}
		};
	};
}

// Sdk decorator
export const Sdk = (): MethodDecorator => {
	return ((target, propertyKey: string): void => {
		const invokes = Reflect.getMetadata(INVOKES_METADATA_KEY, Reflect) || [];
		if (invokes.some(([key, ctor]) => key === propertyKey && ctor === target.constructor)) {
			console.warn(`[${target.constructor.name}] ${propertyKey} overriding`, propertyKey);
		}
		invokes.push([propertyKey, target.constructor]);
		Reflect.defineMetadata(INVOKES_METADATA_KEY, invokes, Reflect);
	}) as MethodDecorator;
};

// SdkSync decorator
export const SdkSync = (): MethodDecorator => {
	return ((target, propertyKey: string): void => {
		if (!propertyKey.match(/Sync$/)) {
			console.warn(`@SdkSync() handlers should be suffixed with "Sync", i.e., ${propertyKey}Sync`);
		}
		const onSends = Reflect.getMetadata(ONSENDS_METADATA_KEY, Reflect) || [];
		if (onSends.some(([key, ctor]) => key === propertyKey && ctor === target.constructor)) {
			console.warn(`[${target.constructor.name}] ${propertyKey} overriding`);
		}
		onSends.push([propertyKey, target.constructor]);
		Reflect.defineMetadata(ONSENDS_METADATA_KEY, onSends, Reflect);
	}) as MethodDecorator;
};

// Getter functions
export function getControllers(): [string, any, any][] {
	return Reflect.getMetadata(CONTROLLERS_METADATA_KEY, Reflect) || [];
}

export function getInvokes(): [string, any][] {
	return Reflect.getMetadata(INVOKES_METADATA_KEY, Reflect) || [];
}

export function getOnSends(): [string, any][] {
	return Reflect.getMetadata(ONSENDS_METADATA_KEY, Reflect) || [];
}

/**
 * ## Admin
 * This module provides administrative functionalities for managing the kiosk system settings and configurations.
 *
 * @packageDocumentation
 */
@SdkController('admin')
export class Admin {

	@Sdk()
	openPanel(authenticated: boolean): Promise<void> {
		throw new Error('Not Implemented');
	}
	/**
	 * Close the Admin panel.
	 * @example
	 * ```javascript
	 * eflyn.admin.close();
	 * ```
	 */
	@Sdk()
	close(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Open the Admin panel.
	 * @example
	 * ```javascript
	 * eflyn.admin.open();
	 * ```
	 */
	@Sdk()
	open(): Promise<void> {
		throw new Error('Not Implemented');
	}

	/**
	 * Connect kiosk to a live room
	 * Optionally specify a displayId to enable specific display other than the primary
	 */
	@Sdk()
	connectToRoom(): Promise<void> {
		throw new Error('Not Implemented');
	}
}

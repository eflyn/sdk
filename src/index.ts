import { Keyboard } from './sdk/keyboard';
import { Player } from './sdk/player';
import { Profile } from './sdk/profile';
import { Platform } from './sdk/platform';
import { Rgb } from './sdk/rgb';
import { App } from './sdk/app';
import { Admin } from './sdk/admin';
import { Helpers } from './sdk/helpers';
import { Payment } from './sdk/payment';
import { Printer } from './sdk/printer';
import { Update } from './sdk/update';
import { Message } from './sdk/message';
import { Receipt } from './sdk/receipt';
import { Reset } from './sdk/reset';
import { Vending } from './sdk/vending';
import { Cache } from './sdk/cache';
import { Record } from './sdk/record';
import { Storage } from './sdk/storage';
import EventEmitter from 'eventemitter3';

export * from './sdk/vending';
export * from './sdk/app';
export * from './sdk/admin';
export * from './sdk/cache';
export * from './sdk/keyboard';
export * from './sdk/message';
export * from './sdk/payment';
export * from './sdk/platform';
export * from './sdk/player';
export * from './sdk/printer';
export * from './sdk/profile';
export * from './sdk/receipt';
export * from './sdk/record';
export * from './sdk/reset';
export * from './sdk/rgb';
export * from './sdk/storage';
export * from './sdk/update';
export * from './sdk/vending';
export * from './sdk/barcode';
export * from './sdk/helpers';

export class EflynSdk extends EventEmitter {
    readonly keyboard: Keyboard = new Keyboard();
    readonly player: Player = new Player();
    readonly profile: Profile = new Profile();
    readonly storage: Storage = new Storage();
    readonly cache: Cache = new Cache();
    readonly platform: Platform = new Platform();
    readonly rgb: Rgb = new Rgb();
    readonly app: App = new App();
    readonly admin: Admin = new Admin();
    readonly helpers: Helpers = new Helpers();
    readonly payment: Payment = new Payment();
    readonly printer: Printer = new Printer();
    readonly update: Update = new Update();
    readonly message: Message = new Message();
    readonly receipt: Receipt = new Receipt();
    readonly record: Record = new Record();
    readonly reset: Reset = new Reset();
    readonly vending: Vending = new Vending();
}

export * from './client';
export * from './server';
export * from './webview';
export { WrappedJSONRPCResponse } from './constants';
export { WrappedJSONRPCRequest } from './constants';
export { isValidOrigin } from './constants';

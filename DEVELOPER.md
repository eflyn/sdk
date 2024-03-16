### How It Works
#### Server Setup
The SDK is made accessible to clients by means of the ```startServer()``` method.
Please note **this is done automatically** and is not a required step for clients using the SDK.

```ts
import { startServer } from '@eflyn/sdk';

/**
 * Here we start an SDK server by providing it a functional SDK
 * object as well as a handler for sending messages to external
 * non SDK top windows (this necessary is for inter-frame 
 * communication as described below).
 */
startServer(sdk, (message) => {
  eflynPlatform.appWindow.postMessageToAll(message);
});
```

This package is designed to work with both a window and its child iframes as well as across multiple windows.

#### Intra-frame Communication
This package uses window.postMessage to enable bi-directional communication between the SDK server and client. So long as clients in a single browser window context can access the server at window.top they will be able to communicate with the SDK, this includes any iframes and iframes within iframes that import and use ```connectClient()```.

#### Inter-frame Communication
When using multiple "top" windows (such as with Webview) typical intra-frame communication does not work and so special APIs must be written at the platform level to allow passing messages between different window.top objects.

This package provides a solution using the ```startWindowProxy()``` utility method which can enable you to fill in message passing logic to enable communication between different windows.

```ts
/**
 * webview-preload.js
 * 
 * This file is loaded into all webviews
 */

import { startWindowProxy } from '@eflyn/sdk';

/**
 * Here we use startWindowProxy from
 * the SDK and provide a mechanism for passing 
 * messages to the main window from a webview.
 */
startWindowProxy((message) => {
  sdkServerWindow.postMessage(message);
});
```


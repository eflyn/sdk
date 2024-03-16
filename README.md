<img style="margin-top: 20px; display: block; width: 100%; max-width: 640px;" src="assets/developer-platform-banner.png">

# Eflyn SDK

Welcome to the Eflyn SDK, a comprehensive JavaScript-based Software Development Kit that allows developers to access a variety of Kiosk APIs while developing applications on the Eflyn Kiosk Platform.

## Introduction

The Eflyn Kiosk Developer Platform is a powerful ecosystem that offers developers a suite of APIs, tools, and pre-built workflows to expedite the creation, testing, and deployment of kiosk applications. Our platform is dedicated to delivering an unmatched user experience, ensuring that your kiosk applications stand out in the market. 

### Key Features

- **Speedy App Development**: Leverage our robust API suite for efficient and effortless custom kiosk app creation.
- **Admin API**: Seamlessly manage kiosk hardware and applications with our fully-typed, open-source API.
- **Custom Kiosk Apps**: Utilize the E Suite Platform SDK for seamless integrations with Kiosk OS, barcode scanners, printers, and more.
- **Payment Acceptance**: Integrate in-person payments directly on the kiosk using our Payment API, compatible with popular North American payment platforms.
- **Developer Onboarding**: Benefit from comprehensive support, detailed documentation, and consultation services for a smooth onboarding experience.

## Getting Started

The SDK object is provided by calling the connectClient() method exported from the ```@eflyn/sdk``` package.

```ts

import { connectClient } from '@eflyn/sdk';

const eflyn = connectClient();
eflyn.printer.printHtml({
  html: `TEST RECEIPT $10.00`
});

```
Another option is using the [hosted sdk.js script](/sdk.js) in your HTML:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example Kiosk App</title>
    </head>
    <body>
        <!-- Import sdj.js to access Eflyn SDK -->
        <script src="/sdk.js"></script>
        <!-- Start custom script that uses the eflyn SDK -->
        <script>
            const eflyn = connectClient();
            eflyn.printer.printHtml({
                html: `TEST RECEIPT $10.00`
            });
        </script>
    </body>
</html>
```


## Examples

Find example scripts below that demonstrate how to utilize the Eflyn SDK to build applications on the Kiosk Platform.

### Kiosk Printing

Print 80mm wide receipts using the Printer API:

```javascript
eflyn.printer.printHtml({
  html: `
    <h3>Print Test</h3>
    <p>Print real HTML here!</p>
  `
});
```

### Take Payments
Accept payments on the pinpad using the paymentService API:

```javascript
eflyn.payment.approve({
  amount: 5.00,
  invoice: 'invid'
});
```

### Read Barcodes
Listen for scan events with the barcode service:

```javascript
eflyn.on('eflyn.barcode.read', ({ code }) =>
  alert('Scanned: ' + code)
);
```

# Sample App 🚀
Check out the [kiosk example app here](./assets/example/index.html) that will give you a more comprehensive understanding of how web apps are setup and integrated with the Eflyn SDK.
<br><br>
<img src="./assets/example/sample.png" width="200px">
<br><br>
You can also [copy the link](./assets/example/index.html) and set it up as a Custom App in your backend to get started.  

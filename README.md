# PubNub v5 SDK for JavaScript

PubNub v5 SDKs are designed to be modular with extensibility in mind while conforming to a known set of common functionality and specifications.

The SDK is modular and provides default implementations for various modules. You have the choice to use the `main` package which includes the defaults or compose a custom SDK using the `core` along with a combination of default modules and your own custom implementations of one or more modules.

Some modules are required while others are optional.

Required
- core
- net
- parse

Optional
- log
- token

## Usage

The typical usage will be to import the default `main` SDK module.

> npm install pubnub

``` javascript
import { PubNub } from 'pubnub';

let pn = new PubNub({
  subKey: 'my_subscribe_key'
});

pn.subscribe('my_channel', {
  message: (message) => {
    console.log('message received', message);  
  })}
;
```

For advanced use cases such as reducing the size of the SDK by excluding certain modules or providing an alternative HTTP client or logging implementation, you may want to customize the PubNub sdk, see the [custom build](docs/custom-build.md) documentation for more information.
# PubNub v5 SDK for JavaScript - Custom Build

In order to provide custom modules it is as simple as importing the `core` and other default modules you want to use in your custom build.

The core implementation interacts with other modules through a common interface so you can implement your own modules as needed.

Example using JavaScript

```javascript
import { core } from 'pubnub';

```


Example using TypeScript

```typescript
import { core, net, parse, log } from 'pubnub';

```
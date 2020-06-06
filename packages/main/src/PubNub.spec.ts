import { PubNub } from "../PubNub";
import { PubNubSdkError } from "../core/error/PubNubSdkError"
import { Config } from "../core/cfg/Config";

describe('PubNubSdk', () => {
 
  test('empty constructor', () => {
      let pubnub = new PubNub();
      expect(pubnub).not.toBeUndefined();
  
      // These members are not populated until manually set or init is called to populate with defaults
      expect(pubnub.config()).toBeUndefined();
      expect(pubnub.core()).toBeUndefined();
      expect(pubnub.api()).toBeUndefined();
      expect(pubnub.net()).toBeUndefined();
      expect(pubnub.parse()).toBeUndefined();
      expect(pubnub.log()).toBeUndefined();
  });

  test('constructor with config', () => {
    let pubnub = new PubNub(new Config());
    expect(pubnub).not.toBeUndefined();

    // Config is set in constructor
    expect(pubnub.config()).not.toBeUndefined();

    // SDK is initialized when config is passed in constructor so core and api are created
    expect(pubnub.core()).not.toBeUndefined();
    expect(pubnub.api()).not.toBeUndefined();

    // These members are set to defaults when config does not provide them
    expect(pubnub.net()).not.toBeUndefined();
    expect(pubnub.parse()).not.toBeUndefined();
    expect(pubnub.log()).not.toBeUndefined();

  });

  test('empty constructor with init with config', () => {
    let pubnub = new PubNub();
    expect(pubnub).not.toBeUndefined();

    // Config not yet provided
    expect(pubnub.config()).toBeUndefined();

    pubnub.config(new Config());
    pubnub.init();

    // Config is now set
    expect(pubnub.config()).not.toBeUndefined();


    // SDK is initialized manually so core and api are created
    expect(pubnub.core()).not.toBeUndefined();
    expect(pubnub.api()).not.toBeUndefined();

    // These members are set to defaults when config does not provide them
    expect(pubnub.net()).not.toBeUndefined();
    expect(pubnub.parse()).not.toBeUndefined();
    expect(pubnub.log()).not.toBeUndefined();

  });


  test('empty constructor with init without config', () => {
    let pubnub = new PubNub();

    // Config not yet provided
    expect(pubnub.config()).toBeUndefined();

    expect(function init() { pubnub.init(); }).toThrow(PubNubSdkError);
  });
});
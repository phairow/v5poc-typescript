import { PubNubSdk } from './PubNubSdk';
import { Config } from '../core/cfg/Config';

describe('PubNubSdk', () => {
  const mockSuccessResponse = "hi there mock fetch";
  const mockTextPromise = Promise.resolve(mockSuccessResponse); // 2
  const responseMock = { // 3
    url: "http://hello",
    status: 200,
    statusText: "ok",
    headers: new Headers({"a": "b"}),
    text: () => mockTextPromise,
    json: () => mockTextPromise,
    ok: true,
    type: "basic" as const,
    redirected: false,
    body: null,
    bodyUsed: true,
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(2)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
    clone: () => responseMock,
    trailer: Promise.resolve(new Headers()),
  };
  const mockFetchPromise = Promise.resolve(responseMock);
  global.fetch = () => mockFetchPromise;
  // jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
  
  test('hi', (done) => {
    let pubnub = new PubNubSdk(new Config());
    let hi = pubnub.sayHi();
    expect(hi).toEqual('hi there v5poc');
    setTimeout(() => {
      done();
    }, 300);
  });

  // test('empty constructor', () => {
  //     let pubnub = new PubNubSdk();
  //     expect(pubnub).not.toBeUndefined();
  
  //     // These members are not populated until manually set or init is called to populate with defaults
  //     expect(pubnub.config()).toBeUndefined();
  //     expect(pubnub.core()).toBeUndefined();
  //     expect(pubnub.api()).toBeUndefined();
  //     expect(pubnub.net()).toBeUndefined();
  //     expect(pubnub.parse()).toBeUndefined();
  //     expect(pubnub.log()).toBeUndefined();
  // });

  // test('constructor with config', () => {
  //   let pubnub = new PubNubSdk(new Config());
  //   expect(pubnub).not.toBeUndefined();

  //   // Config is set in constructor
  //   expect(pubnub.config()).not.toBeUndefined();

  //   // SDK is initialized when config is passed in constructor so core and api are created
  //   expect(pubnub.core()).not.toBeUndefined();
  //   expect(pubnub.api()).not.toBeUndefined();

  //   // These members are set to defaults when config does not provide them
  //   expect(pubnub.net()).not.toBeUndefined();
  //   expect(pubnub.parse()).not.toBeUndefined();
  //   expect(pubnub.log()).not.toBeUndefined();

  // });

  // test('empty constructor with init with config', () => {
  //   let pubnub = new PubNubSdk();
  //   expect(pubnub).not.toBeUndefined();

  //   // Config not yet provided
  //   expect(pubnub.config()).toBeUndefined();

  //   pubnub.config(new Config());
  //   pubnub.init();

  //   // Config is now set
  //   expect(pubnub.config()).not.toBeUndefined();


  //   // SDK is initialized manually so core and api are created
  //   expect(pubnub.core()).not.toBeUndefined();
  //   expect(pubnub.api()).not.toBeUndefined();

  //   // These members are set to defaults when config does not provide them
  //   expect(pubnub.net()).not.toBeUndefined();
  //   expect(pubnub.parse()).not.toBeUndefined();
  //   expect(pubnub.log()).not.toBeUndefined();

  // });


  // test('empty constructor with init without config', () => {
  //   let pubnub = new PubNubSdk();

  //   // Config not yet provided
  //   expect(pubnub.config()).toBeUndefined();

  //   expect(function init() { pubnub.init(); }).toThrow(PubNubSdkError);
  // });
});
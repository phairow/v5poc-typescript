import {
  Core,
  Config,
  PubNubSdkError,
} from "pubnub-core";
import { Api } from "pubnub-api";
import { PubNubSdk } from "pubnub-dx";
import { PubNubLogger } from "pubnub-log";
import { PubNubNetworking } from "pubnub-net";
import { PubNubParser } from "pubnub-parse";
import { PubNubTokenManager } from "pubnub-token";
export class PubNub extends PubNubSdk {

  public constructor(config?: Config) {
    super();

    if (config !== undefined) {
      this._config = config;
      this.init();
    }
  }

  public init(): void {

    if (this._config === undefined) {
      throw new PubNubSdkError("Configuration missing");
    }

    if (this._config.log != null) {
      this._log = this._config.log;
    }

    if (this._config.net != null) {
      this._net = this._config.net;
    }

    if (this._config.parse != null) {
      this._parse = this._config.parse;
    }

    if (this._log == null) {
      this._log = new PubNubLogger();
    }

    if (this._net == null) {
      this._net = new PubNubNetworking();
    }

    if (this._parse == null) {
      this._parse = new PubNubParser();
    }

    if (this._token == null) {
      this._token = new PubNubTokenManager();
    }

    this._core = new Core(
      this._config,
      this._log,
      this._net,
      this._parse,
      this._token
    );

    this._api = new Api(this._net, this._parse, this._log, this._token);
  }

  sayHi(): string {
    return 'hi there v5poc';
  }
}

import {
  Core,
  Config,
  Logger,
  Networking,
  Parser,
  TokenManager,
} from "pubnub-core";
import { Api } from "pubnub-api";

export class PubNubSdk {

  protected  _config!: Config;

  protected  _core!: Core;

  protected  _api!: Api;

  protected  _log!: Logger;

  protected  _net!: Networking;

  protected  _parse!: Parser;

  protected  _token!: TokenManager;

  public constructor() {
      // empty
  }

  public config(config?: Config): PubNubSdk | Config {
    if (config !== undefined) {
      this._config = config;
      return this;
    }

    return this._config;
  }

  public core(core?: Core): PubNubSdk | Config {
    if (core !== undefined) {
      this._core = core;
      return this;
    }

    return this._core;
  }

  public api(api?: Api): PubNubSdk | Api {
    if (api !== undefined) {
      this._api = api
      return this;
    }

    return this._api;
  }

  public log(log?: Logger): PubNubSdk | Logger {
      if (log !== undefined) {
          this._log = log;
          return this;
      }

      return this._log;
  }

  public net(net?: Networking): PubNubSdk | Networking {
    if (net !== undefined) {
      this._net = net;
      return this;
    }

    return this._net;
  }

  public parse(parse?: Parser): PubNubSdk | Parser {
    if (parse !== undefined) {
      this._parse = parse;
      return this;
    }

    return this._parse;
  }

  public token(token?: TokenManager): PubNubSdk | TokenManager {
    if (token !== undefined) {
      this._token = token;
      return this;
    }

    return this._token;
  }
}
import { Config } from "core/cfg/Config";
import { Core } from "core/Core";
import { Api } from "core/api/Api";
import { Logger } from "core/modules/log/Logger";
import { Networking } from "core/modules/net/Networking";
import { Parser } from "core/modules/parse/Parser";
import { TokenManager } from "core/modules/token/TokenManager";

export class Pubnub {

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

    public config(config?: Config): Pubnub | Config {
        if (config !== undefined) {
            this._config = config;
            return this;
        }

        return this._config;
    }

    public core(core?: Core): Pubnub | Config {
        if (core !== undefined) {
            this._core = core;
            return this;
        }

        return this._core;
    }

    public api(api?: Api): Pubnub | Api {
        if (api !== undefined) {
            this._api = api
            return this;
        }

        return this._api;
    }

    public log(log?: Logger): Pubnub | Logger {
        if (log !== undefined) {
            this._log = log;
            return this;
        }

        return this._log;
    }

    public net(net?: Networking): Pubnub | Networking {
        if (net !== undefined) {
            this._net = net;
            return this;
        }

        return this._net;
    }

    public parse(parse?: Parser): Pubnub | Parser {
        if (parse !== undefined) {
            this._parse = parse;
            return this;
        }

        return this._parse;
    }

    public token(token?: TokenManager): Pubnub | TokenManager {
        if (token !== undefined) {
            this._token = token;
            return this;
        }

        return this._token;
    }
}
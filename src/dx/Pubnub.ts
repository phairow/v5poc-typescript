import { Config } from "../cfg/Config";
import { Core } from "../core/Core";
import { Api } from "../api/Api";
import { Logger } from "../log/Logger";
import { Networking } from "../net/Networking";
import { Parser } from "../parse/Parser";

export class Pubnub {

    protected  _config!: Config;

    protected  _core!: Core;

    protected  _api!: Api;

    protected  _log!: Logger;

    protected  _net!: Networking;

    protected  _parse!: Parser;

    public constructor() {
        // empty
    }

    public config(config?: Config) {
        if (config !== undefined) {
            this._config = config;
            return this;
        }

        return this._config;
    }

    public core(core?: Core) {
        if (core !== undefined) {
            this._core = core;
            return this;
        }

        return this._core;
    }

    public api(api?: Api) {
        if (api !== undefined) {
            this._api = api
            return this;
        }

        return this._api;
    }

    public log(log?: Logger) {
        if (log !== undefined) {
            this._log = log;
            return this;
        }

        return this._log;
    }

    public net(net?: Networking) {
        if (net !== undefined) {
            this._net = net;
            return this;
        }

        return this._net;
    }

    public parse(parse?: Parser) {
        if (parse !== undefined) {
            this._parse = parse;
            return this;
        }

        return this._parse;
    }
}
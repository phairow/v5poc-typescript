import { Core } from "core/Core";
import { Api } from "core/api/Api";
import { Config } from "core/cfg/Config";
import { Pubnub } from "core/dx/Pubnub";
import { PubNubSdkError } from "core/error/PubNubSdkError";
import { PubNubLogger } from "log/PubNubLogger";
import { PubNubNetworking } from "net/PubNubNetworking";
import { PubNubParser } from "parse/PubNubParser";
import { PubNubTokenManager } from "token/PubNubTokenManager";
import { HttpMethod } from "core/modules/net/http/HttpMethod.enum";

export class PubNubSdk extends Pubnub {

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

        this._api = new Api(this._net, this._parse, this._log);
    }

    sayHi(): string {
        let url = "http://pubnub.com";

        let result = this._net.executeHttpRequest({
            method: HttpMethod.GET,
            url: url
        });
        
        result.response
        .then((result) => console.log(result))
        .catch((e) => console.log(e));
        
        result.abort();

        return 'hi there v5poc';
    }
}
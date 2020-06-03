import { Core } from "./core/Core";
import { Api } from "./api/Api";
import { Config } from "./cfg/Config";
import { Pubnub } from "./dx/Pubnub";
import { PubNubSdkError } from "./PubNubSdkError";
import { PubNubLogger } from "./log/PubNubLogger";
import { PubNubNetworking } from "./net/PubNubNetworking";
import { PubNubParser } from "./parse/PubNubParser";
import { Pam } from "./core/auth/Pam";
import { Crypto } from "./core/crypto/Crypto";
import { StateManager } from "./core/state/StateManager";
import { TelemetryManager } from "./core/telemetry/TelemetryManager";
import { TokenManager } from "./core/token/TokenManager";
import { Util } from "./core/util/Util";
import { HttpMethod } from "./net/http/HttpMethod.enum";

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

        this._core = new Core(
                this._config,
                this._log,
                this._net,
                this._parse,
                new Pam(),
                new Crypto(),
                new StateManager(),
                new TelemetryManager(),
                new TokenManager(),
                new Util()
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
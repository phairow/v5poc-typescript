import { Config } from "../cfg/Config";
import { Networking } from "../net/Networking";
import { Pam } from "./auth/Pam";
import { Crypto } from "./crypto/Crypto";
import { StateManager } from "./state/StateManager";
import { TelemetryManager } from "./telemetry/TelemetryManager";
import { TokenManager } from "./token/TokenManager";
import { Logger } from "../log/Logger";
import { Parser } from "../parse/Parser";
import { Util } from "./util/Util";

export class Core {
    public constructor(
        public config: Config,
        public log: Logger,
        public net: Networking,
        public parse: Parser,
        public auth: Pam,
        public crypto: Crypto,
        public stateManager: StateManager,
        public telemetryManager: TelemetryManager,
        public tokenManager: TokenManager,
        public util: Util
    ) {

    }

}
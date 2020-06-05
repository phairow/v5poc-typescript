import { Config } from "./cfg/Config";
import { Networking } from "./modules/net/Networking";
import { Pam } from "./auth/Pam";
import { Crypto } from "./crypto/Crypto";
import { StateManager } from "./state/StateManager";
import { TelemetryManager } from "./telemetry/TelemetryManager";
import { TokenManager } from "./modules/token/TokenManager";
import { Logger } from "./modules/log/Logger";
import { Parser } from "./modules/parse/Parser";

export class Core {
    public auth: Pam = new Pam();
    public crypto: Crypto = new Crypto();
    public stateManager: StateManager = new StateManager();
    public telemetryManager: TelemetryManager = new TelemetryManager();

    public constructor(
        public config: Config,
        public log: Logger,
        public net: Networking,
        public parse: Parser,
        public token: TokenManager,
    ) {

    }

}
import { Config } from "core/cfg/Config";
import { Networking } from "core/modules/net/Networking";
import { Pam } from "core/auth/Pam";
import { Crypto } from "core/crypto/Crypto";
import { StateManager } from "core/state/StateManager";
import { TelemetryManager } from "core/telemetry/TelemetryManager";
import { TokenManager } from "core/modules/token/TokenManager";
import { Logger } from "core/modules/log/Logger";
import { Parser } from "core/modules/parse/Parser";

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
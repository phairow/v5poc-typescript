import { Logger } from "../modules/log/Logger";
import { Networking } from "../modules/net/Networking";
import { Parser } from "../modules/parse/Parser";
import { TokenManager } from "../modules/token/TokenManager";

export class Config {

    public log!: Logger;

    public net!: Networking;

    public parse!: Parser;

    public token!: TokenManager;
}
import { Logger } from "../modules/log/Logger";
import { Networking } from "../modules/net/Networking";
import { Parser } from "../modules/parse/Parser";

export class Config {

    public log!: Logger;

    public net!: Networking;

    public parse!: Parser;
}
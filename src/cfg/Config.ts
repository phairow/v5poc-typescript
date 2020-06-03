import { Logger } from "../log/Logger";
import { Networking } from "../net/Networking";
import { Parser } from "../parse/Parser";

export class Config {

    public log!: Logger;

    public net!: Networking;

    public parse!: Parser;
}
import { Logger } from "core/modules/log/Logger";
import { Networking } from "core/modules/net/Networking";
import { Parser } from "core/modules/parse/Parser";

export class Config {

    public log!: Logger;

    public net!: Networking;

    public parse!: Parser;
}
import { Logger } from "../../modules/log/Logger";
import { Networking } from "../../modules/net/Networking";
import { Parser } from "../../modules/parse/Parser";

export class DeleteUuidMetadataDelete {
  private httpMethod: string = 'delete';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(): boolean {

    return true;
  }

  static execute(): boolean {
    // ...
    return true;
  }

}
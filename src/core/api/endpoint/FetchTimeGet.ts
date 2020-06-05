import { Logger } from "../../modules/log/Logger";
import { Networking } from "../../modules/net/Networking";
import { Parser } from "../../modules/parse/Parser";

export class FetchTimeGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(callback: string, uuid: string): boolean {

    if (typeof (callback) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(callback: string, uuid: string): boolean {
    // ...
    return true;
  }

}
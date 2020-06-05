import { Logger } from "../../modules/log/Logger";
import { Networking } from "../../modules/net/Networking";
import { Parser } from "../../modules/parse/Parser";

export class ApplyingPAMV3Post {
  private httpMethod: string = 'post';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, timestamp: number, signature: string): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    if (typeof (signature) !== 'string') {
      return false;
    }

    return true;
  }

  static execute(subKey: string, timestamp: number, signature: string): boolean {
    // ...
    return true;
  }

}
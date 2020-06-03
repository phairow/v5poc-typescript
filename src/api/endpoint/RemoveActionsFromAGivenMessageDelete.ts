import { Logger } from "../../log/Logger";
import { Networking } from "../../net/Networking";
import { Parser } from "../../parse/Parser";

export class RemoveActionsFromAGivenMessageDelete {
  private httpMethod: string = 'delete';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channel: string, messageTimetoken: string, actionTimetoken: string, auth: string, uuid: string, signature: string, timestamp: number) {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (messageTimetoken) !== 'string') {
      return false;
    }

    if (typeof (actionTimetoken) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (signature) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channel: string, messageTimetoken: string, actionTimetoken: string, auth: string, uuid: string, signature: string, timestamp: number) {
    // ...
  }

}
import { Parser } from "core/modules/parse/Parser";

export class PubNubParser implements Parser {
  fromJsonString<OutputType>(input: string): OutputType {
    return JSON.parse(input) as unknown as OutputType;
  }

  toJsonString<InputType>(item: InputType): string {
    return JSON.stringify(item);
  }
}
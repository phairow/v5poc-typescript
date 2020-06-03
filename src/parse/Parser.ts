export interface Parser {
  fromJsonString: <OutputType>(input: string) => OutputType;
  toJsonString: <InputType>(item: InputType) => string;
}
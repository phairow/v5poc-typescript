export class PubNubSdkError extends Error {
    public constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, PubNubSdkError.prototype);

        return this;
    }   
}
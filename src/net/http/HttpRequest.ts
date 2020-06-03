import { HttpMethod } from "./HttpMethod.enum";

export interface HttpRequest {
    method: HttpMethod;
    url: string;
    headers?: { [key: string]: string };
    body?: string;
}
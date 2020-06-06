import { HttpRequest } from "./http/HttpRequest";
import { HttpResponse } from "./http/HttpResponse";

export interface Networking {
    executeHttpRequest(request: HttpRequest): { abort: () => void, response: Promise<HttpResponse> };
}
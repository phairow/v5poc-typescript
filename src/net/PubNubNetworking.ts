import { Networking } from "./Networking";
import { HttpRequest } from "./http/HttpRequest";
import { HttpResponse } from "./http/HttpResponse";
import * as fetch from "node-fetch";

export class PubNubNetworking implements Networking {
  executeHttpRequest(request: HttpRequest): { abort: () => void, response: Promise<HttpResponse> } {
    const controller = new AbortController();

    return {
      abort: () => {
        controller.abort();
      },
      response: new Promise<HttpResponse>((resolve, reject) => {
        fetch.default(request.url, {
          signal: controller.signal as any,
          method: request.method,
          body: request.body,
          headers: request.headers,
        }).then((response) => {
          let responseHeaders: { [key: string]: string } = {};

          response.headers.forEach((value, key) => responseHeaders[key] = value);

          response.text().then((responseText) => {
            resolve({
              status: response.status,
              body: responseText,
              headers: responseHeaders,
            });
          });
        }).catch((e) => {
          reject(e);
        });
      })
    };
  };
}
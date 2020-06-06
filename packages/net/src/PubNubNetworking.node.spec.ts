import { PubNubNetworking } from "./PubNubNetworking";
import { HttpRequest } from "../core/modules/net/http/HttpRequest";
import { HttpMethod } from "../core/modules/net/http/HttpMethod.enum";

describe('PubNubSdk', () => {

  test('hi node ', async () => {
    
    let net = new PubNubNetworking();
    let request: HttpRequest = {
      method: HttpMethod.GET,
      url: 'http://helpme.corn',
    };
    let result = net.executeHttpRequest(request)
    expect(result.abort).toBeTruthy();

    let response = await result.response;

    expect(response.status).toEqual(200);
  });

});
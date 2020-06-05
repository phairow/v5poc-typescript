import { PubNubNetworking } from './PubNubNetworking';
import { HttpRequest } from "../core/modules/net/http/HttpRequest";
import { HttpMethod } from "../core/modules/net/http/HttpMethod.enum";
import { mockFetch } from '../../test/mocks/fetch';

describe('PubNubSdk', () => {

  test('hi browser ', async () => {
    mockFetch();
    // console.log('process', process);
    
    
    let net = new PubNubNetworking();
    let request: HttpRequest = {
      method: HttpMethod.GET,
      url: 'http://pubnub.com/abc',
    };
    let result = net.executeHttpRequest(request)
    expect(result.abort).toBeTruthy();

    let response = await result.response;

    expect(response.status).toEqual(200);
  });

});
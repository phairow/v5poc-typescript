
export const mockFetch = (options: {
  ok?: boolean,
  url?: string,
  status?: number,
  statusText?: string,
  headers?: { [key: string]: string},
  trailer?: { [key: string]: string},
  text?: string,
  json?: any,
  redirected?: boolean,
  bodyUsed?: boolean,
} = {}): void => {
  const mockSuccesstext = options.text || "hi there mock fetch";
  const mockTextPromise = Promise.resolve(mockSuccesstext);
  const mockSuccessJson = options.json || { message: mockSuccesstext };
  const mockJsonPromise = Promise.resolve(mockSuccessJson);
  const responseMock = {
    url: options.url || "http://pubnub.com",
    ok: options.ok || true,
    status: options.status || 200,
    statusText: options.statusText || "ok",
    headers: new Headers(options.headers),
    text: () => mockTextPromise,
    json: () => mockJsonPromise,
    type: "basic" as const,
    redirected: options.redirected || false,
    body: null,
    bodyUsed: options.bodyUsed || true,
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
    clone: () => responseMock,
    trailer: Promise.resolve(new Headers(options.trailer)),
  };
  const mockFetchPromise = Promise.resolve(responseMock);
  
  if (!window.fetch) {
    // we need something to mock so create a dummy fetch method if none exists
    window.fetch = () => { throw new Error("Fetch not implemented"); };
  }
  
  jest.spyOn(window, 'fetch').mockImplementation(() => mockFetchPromise);
};
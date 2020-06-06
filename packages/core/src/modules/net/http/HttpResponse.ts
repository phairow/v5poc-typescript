export interface HttpResponse {
  status: number;
  headers: { [key: string]: string };
  body: string;
}
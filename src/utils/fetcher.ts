import { ApiResponse, ErrorResponse, Method, SuccessResponse } from "./types";

export async function fetcher<T>(
  method: Method,
  endpoint: string,
  body?: unknown
): Promise<SuccessResponse<T>> {
  const request = await fetch(`${endpoint}`, {
    method,
    credentials: "include",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });

  const json: ApiResponse<T> = await request.json();

  if (request.status >= 400 || !json.successful) {
    throw new Error(`${(json as ErrorResponse).error}`);
  }

  return json;
}
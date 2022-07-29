import { ApiResponse, ErrorResponse, Method, SuccessResponse } from "./types";
import axios from "axios";

export async function fetcher<T>(
  endpoint: string
): Promise<SuccessResponse<T>> {
  const request = await axios.get(`${endpoint}`);

  const json: ApiResponse<T> = request.data;

  if (request.status >= 400 || !json.successful) {
    throw new Error(`${(json as ErrorResponse).error}`);
  }

  return json;
}

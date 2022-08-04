import {
    ApiResponse,
    ErrorResponse,
    Method,
    SuccessResponse,
} from "./types/types";
import axios from "axios";

export async function fetcher<T>(endpoint: string): Promise<T> {
    console.log("attempting to fetch");
    const request = await axios.get(`${endpoint}`);

    const json: T = request.data;

    if (request.status >= 400 || !json) {
        throw new Error(`${(request.data as ErrorResponse).error}`);
    }

    console.log("fetcher:", json);
    return json;
}

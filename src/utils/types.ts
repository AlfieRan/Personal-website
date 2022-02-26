export interface UserInfo {
  received: boolean;
  name: string;
  id: string;
}

export type Method = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface SuccessResponse<T> {
  successful: true;
  data: T;
}

export interface ErrorResponse {
  successful: false;
  error: string;
}

export type MessageInfo = {
  id: string;
  content: string;
  sender: { id: string; name: string };
};

export type returnAddressType = hasAddress | noAddress;

interface hasAddress {
  hasAddress: true;
  Address: string;
}
interface noAddress {
  hasAddress: false;
}

export type UserLogging = UserIsLogging | UserIsntLogging;

interface UserIsLogging {
  logged: true;
  name: string;
}
interface UserIsntLogging {
  logged: false;
}
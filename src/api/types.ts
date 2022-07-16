export enum ResultStatus {
  OK = 'OK',
  ERROR = 'ERROR',
  ERRORS = 'ERRORS',
}

export interface ErrorResponse {
  status: ResultStatus.ERROR;
  error?: string;
}

interface ValidationErrorsResponse {
  status: ResultStatus.ERRORS;
  errors?: unknown[] 
}

export interface OkResponse<T = undefined> {
  status: ResultStatus.OK;
  result?: T;
}

export type ResponseWithStatus<T = undefined> =
  | ErrorResponse
  | ValidationErrorsResponse
  | OkResponse<T>;

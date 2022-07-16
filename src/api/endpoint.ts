import { ENDPOINT } from './const';
import { ResponseWithStatus, ResultStatus } from './types';

const POST_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export interface BasicUser {
  id: string;
  name: string;
  email: string;
}

function getUserBasic() {
  return request<BasicUser>('/v4/user/basic');
}

function postAuthSignup(data: {
  name: string;
  password: string;
  email: string;
}) {
  return request<{ id: number }>('/v4/auth/signup', {
    ...POST_OPTIONS,
    body: JSON.stringify(data),
  });
}

function getAuthSignout() {
  return request('/v4/auth/signout');
}

function postAuthSignin(data: { id: string; password: string }) {
  return request('/v4/auth/signin', {
    ...POST_OPTIONS,
    body: JSON.stringify(data),
  });
}

async function request<T = undefined>(
  path: string,
  options?: RequestInit
): Promise<T | undefined> {
  const res = await fetch(`${ENDPOINT}${path}`, {
    ...options,
    credentials: 'include',
  });
  const data: ResponseWithStatus<T> = await res.json();
  switch (data.status) {
    case ResultStatus.OK:
      return data.result;
    case ResultStatus.ERROR:
      throw new Error(data.error);
    case ResultStatus.ERRORS:
      throw new Error(data.errors?.toString());
  }
}

export const API = {
  getUserBasic,
  postAuthSignup,
  getAuthSignout,
  postAuthSignin,
};

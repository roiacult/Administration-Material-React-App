import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./constants";

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  payload: { email, password },
});

export const loginUserSuccss = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFail = (error) => ({
  type: LOGIN_USER_FAIL,
  payload: error,
});

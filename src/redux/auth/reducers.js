import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./constants";
import { getLoggedInUser } from "../../helpers/authUtils";

const INIT_STATE = {
  user: getLoggedInUser(),
  loading: false,
};

const AuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        loginSucced: true,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        loginSucced: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;

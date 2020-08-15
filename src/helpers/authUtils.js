// @flow
import { Cookies } from "react-cookie";

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
  const user = getLoggedInUser();
  if (!user) {
    return false;
  }
  const decoded = user.token;
  if (decoded) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user ? (typeof user == "object" ? user : JSON.parse(user)) : null;
};

/**
 * store user entity & token
 * @param {*} user
 * @param {*} token
 */
const setSession = (token, user) => {
  let cookies = new Cookies();
  cookies.set("user", JSON.stringify({ user, token }), { path: "/" });
};

export { isUserAuthenticated, getLoggedInUser, setSession };

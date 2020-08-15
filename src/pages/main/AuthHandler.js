import React from "react";
import { Redirect } from "@reach/router";
import PropTypes from "prop-types";
import { getLoggedInUser } from "../../helpers/authUtils";

const AuthHandler = ({ children }) => {
  let user = getLoggedInUser();
  return !user ? <Redirect to="/login" noThrow /> : { ...children };
};

AuthHandler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthHandler;

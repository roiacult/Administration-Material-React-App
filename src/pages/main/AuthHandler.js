import React from "react";
import { Redirect } from "@reach/router";
import PropTypes from "prop-types";

const AuthHandler = ({ children }) => {
  let token = localStorage.getItem("token");
  return !token ? <Redirect to="/login" noThrow /> : { ...children };
};

AuthHandler.propTypes = {
  children: PropTypes.object,
};

export default AuthHandler;

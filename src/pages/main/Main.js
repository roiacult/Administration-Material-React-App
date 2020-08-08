import React from "react";
import { Redirect } from "@reach/router";

const Main = () => {
  let token = localStorage.getItem("token");

  return !token ? (
    <Redirect to="/login" noThrow />
  ) : (
    <div>Not implemented yet :(</div>
  );
};

export default Main;

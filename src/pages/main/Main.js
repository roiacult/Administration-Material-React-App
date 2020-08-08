import React from "react";
import { Redirect } from "@reach/router";
import Dashboard from "./dashbord/Dashbord";

const Main = () => {
  let token = localStorage.getItem("token");
  return !token ? <Redirect to="/login" noThrow /> : <Dashboard />;
};

export default Main;

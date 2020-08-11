import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Auth from "../pages/auth/Auth";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import AuthHandler from "../pages/main/AuthHandler";
import Main from "../pages/main/main";
import Dashboard from "../pages/main/dashbord/Dashbord";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff6659",
      main: "#d32f2f",
      dark: "#9a0007",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#74ffff",
      main: "#2fd3d3",
      dark: "#00a1a2",
      contrastText: "#000000",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthHandler path="/">
          <Main path="/">
            <Dashboard path="/" />
          </Main>
        </AuthHandler>
        <Auth path="/login" />
      </Router>
    </ThemeProvider>
  );
};

export default App;

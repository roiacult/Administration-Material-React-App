import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Auth from "../pages/auth/Auth";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

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
        <Auth path="/login" />
      </Router>
    </ThemeProvider>
  );
};

export default App;

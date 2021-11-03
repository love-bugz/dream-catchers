import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import { AuthProvider } from "./context/useAuth";
import { ThemeProvider, createTheme } from "@mui/material";
import { Identity } from "./auth/newUser";

const Routing = () => {
  const [user, setUser] = useState<Identity | null>(
    JSON.parse(localStorage.getItem("user") as string)
  );

  return (
    <Switch>
      {user ? (
        <AuthProvider user={user as Identity}>
          <Route exact path="/">
            <HomePage />
          </Route>
        </AuthProvider>
      ) : (
        <Route exact path="/">
          <LandingPage setUser={setUser} />
        </Route>
      )}
    </Switch>
  );
};

const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;

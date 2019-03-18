import React, { Component } from "react";
import AppRouter from "./Router";
import AuthContext, { auth } from "../utils/authContext";
import "./App.css";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      auth.renewSession();
    }
  }

  render() {
    return (
      <AuthContext.Provider value={auth}>
        <AppRouter />
      </AuthContext.Provider>
    );
  }
}

export default App;

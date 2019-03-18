import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../utils/authContext";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <AuthContext.Consumer>
          {auth => (
            <div className="App">
              <Link to="/">
                <button>Home</button>
              </Link>
              {!auth.isAuthenticated() ? (
                <button onClick={auth.login}>Log In</button>
              ) : (
                <button onClick={auth.logout}>Log Out</button>
              )}
            </div>
          )}
        </AuthContext.Consumer>
      </nav>
    );
  }
}

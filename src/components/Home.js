import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext, { auth } from "../utils/authContext";

class Home extends Component {
  componentDidMount() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      auth.renewSession();
    }
  }

  render() {
    return (
      <AuthContext.Consumer>
        {auth => (
          <div className="App">
            <Link to="/">
              <button>Home</button>
            </Link>
            {!auth.isAuthenticated() && (
              <button onClick={auth.login}>Log In</button>
            )}
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Home;

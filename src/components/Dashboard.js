import React from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../utils/authContext";

function Dashboard() {
  return (
    <div>
      <AuthContext.Consumer>
        {auth => <div>{!auth.isAuthenticated() && <Redirect to="/" />}</div>}
      </AuthContext.Consumer>
      <h3>I am the dashboard</h3>
      <p>All of your stuff is here</p>
    </div>
  );
}

export default Dashboard;

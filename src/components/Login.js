import React from 'react';
import Auth from '../Auth/Auth.js';

function LoginContents() {
  function engageLogin(e) {
    e.preventDefault();
    const auth = new Auth();
    auth.login();
  }

  return (
    <div>
      <h3>Login</h3>
      <p>Just login already</p>
      <button onClick={engageLogin()}>Login</button>
    </div>
  );
}

class Login extends React.Component {
  render() {
    return <LoginContents />;
  }
}

export default Login;

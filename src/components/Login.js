import React from 'react';
import auth0 from 'auth0-js';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'chighja.auth0.com',
    clientID: 'xZzkAR7iQR77Ds0b23dnywzfEdQna0le',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}

const auth = new Auth();

function LoginContents() {
  return (
    <div>
      <h3>Login</h3>
      <p>Just login already</p>
    </div>
  );
}

class Login extends React.Component {
  componentDidMount() {
    auth.login();
  }

  render() {
    return <LoginContents />;
  }
}

export default Login;

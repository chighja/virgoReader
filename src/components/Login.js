import React from 'react';
import Auth from './Auth';

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

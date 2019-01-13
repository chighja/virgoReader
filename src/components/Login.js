import React from 'react';

function LoginContents() {
  return (
    <div>
      <h3>Login</h3>
      <p>Just login already</p>
    </div>
  );
}

class Login extends React.Component {
  render() {
    return <LoginContents />;
  }
}

export default Login;

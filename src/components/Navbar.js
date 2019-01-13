import React from 'react';

export default class Navbar extends React.Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidmount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <button onClick={this.goTo.bind(this, '/')}>Home</button>
        {!isAuthenticated() && (
          <button onClick={this.login.bind(this)}>Log In</button>
        )}
        {isAuthenticated() && (
          <button onClick={this.logout.bind(this)}>Log Out</button>
        )}
      </div>
    );
  }
}

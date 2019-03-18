import React, { Component } from 'react';
import AppRouter from './Router';
import AuthContext, {auth} from '../utils/authContext'
import './App.css';

class App extends Component {
  render() {

    return (
      <AuthContext.Provider value={auth}>
        <AppRouter />
      </AuthContext.Provider>
    );
  }
}

export default App;

/**
 * 
 Regular children
JSX.Element
<div>
</div>


Render prop children
(auth) => JSX.Element
*/
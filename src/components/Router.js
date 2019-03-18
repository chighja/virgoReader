import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Callback from './Callback'
import {auth} from '../utils/authContext'
import history from '../history'

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);

          return <Callback {...props} /> 
        }}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;

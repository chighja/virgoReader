import React from 'react';
import AppRouter from './Router';
import Navbar from './Navbar';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    );
  }
}

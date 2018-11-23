import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/Header/Header.js';
import TestButton from './components/TestButton/TestButton';

class App extends Component {
  render() {
    return (
      <div className="Header">
        {/* <AppHeader /> */}
        <h1>WhichStat</h1>
        <TestButton />
      </div>
    );
  }
}

export default App;

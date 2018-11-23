import React, { Component } from 'react';
import './App.css';
import TestButton from './components/TestButton/TestButton';

class App extends Component {
  render() {
    return (
      <div className="Header">
        <TestButton />
      </div>
    );
  }
}

export default App;

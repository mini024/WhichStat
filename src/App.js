import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import Header from './components/Header/Header';



class App extends Component {
  render() {
    return (
      <div className="Header">
          <Main />
      </div>
    );
  }
}

export default App;
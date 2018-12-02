import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index';
import Main from './components/main/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Main store={this.props.store} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    store
  }
}

export default connect(mapStateToProps)(App)

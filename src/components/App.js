import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

import {
  changeAmount,
  changeFromCurrency,
  changeToCurrency,
  inverseCurrency
} from '../actions/actions';

export class App extends Component {
  render() {
    const {
      store,
      changeAmountAction,
      changeFromCurrencyAction,
      changeToCurrencyAction,
      inverseCurrencyAction
    } = this.props
    return (
      <div className='app'>
        <Header />
        <Main
          store={ store }
          changeAmount={ changeAmountAction }
          changeFromCurrency={ changeFromCurrencyAction }
          changeToCurrency={ changeToCurrencyAction }
          inverseCurrency={ inverseCurrencyAction }
        />
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

const mapDispatchToProps = dispatch => ({
  changeAmountAction: amount => dispatch(changeAmount(amount)),
  changeFromCurrencyAction: from => dispatch(changeFromCurrency(from)),
  changeToCurrencyAction: to => dispatch(changeToCurrency(to)),
  inverseCurrencyAction: currency => dispatch(inverseCurrency(currency))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

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
  inverseCurrency,
  fetchData
} from '../actions/actions';
import { bindActionCreators } from 'redux';

export class App extends Component {
  render() {
    const {
      store,
      changeAmount,
      changeFromCurrency,
      changeToCurrency,
      inverseCurrency,
      fetchData
    } = this.props
    return (
      <div className='app'>
        <Header />
        <Main
          store={ store }
          changeAmount={ changeAmount }
          changeFromCurrency={ changeFromCurrency }
          changeToCurrency={ changeToCurrency }
          inverseCurrency={ inverseCurrency }
          fetchData= { fetchData }
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => ({ store });

// const mapDispatchToProps = dispatch => ({
//   changeAmountAction: amount => dispatch(changeAmount(amount)),
//   changeFromCurrencyAction: from => dispatch(changeFromCurrency(from)),
//   changeToCurrencyAction: to => dispatch(changeToCurrency(to)),
//   inverseCurrencyAction: currency => dispatch(inverseCurrency(currency)),
//   fetchDataAction: data => dispatch(fetchData(data))
// })
const mapDispatchToProps = dispatch => bindActionCreators({
  changeAmount,
  changeFromCurrency,
  changeToCurrency,
  inverseCurrency,
  fetchData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

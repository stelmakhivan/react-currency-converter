import {
  CHANGE_AMOUNT,
  CHANGE_FROM_CURRENCY,
  CHANGE_TO_CURRENCY,
  INVERSE_CURRENCY,
  FETCH_DATA,
  FETCH_START } from '../constants/ActionTypes';
import store from '../store/store';
import spinner from '../components/main/assets/img/spinner';

export function changeAmount(amount) {
  return {
    type: CHANGE_AMOUNT,
    payload: amount
  }
}

export function changeFromCurrency(from) {
  return {
    type: CHANGE_FROM_CURRENCY,
    payload: from
  }
}

export function changeToCurrency(to) {
  return {
    type: CHANGE_TO_CURRENCY,
    payload: to
  }
}

export function inverseCurrency(currency) {
  return {
    type: INVERSE_CURRENCY,
    payload: currency
  }
}

export function fetchStart(result) {
  return {
    type: FETCH_START,
    payload: result
  }
}

export const fetchData = () => dispatch => {
  const { from, to, amount } = store.getState();
  dispatch({
    type: FETCH_START,
    payload: spinner
  })
  return fetch(`https://www.amdoren.com/api/currency.php
?api_key=${process.env.REACT_APP_API_KEY_AMDOREN}
&from=${from}
&to=${to}
&amount=${amount}`)
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_DATA,
    payload: data.amount
  }));
}

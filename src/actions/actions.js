import {
  CHANGE_AMOUNT,
  CHANGE_FROM_CURRENCY,
  CHANGE_TO_CURRENCY,
  INVERSE_CURRENCY,
  FETCH_DATA } from '../constants/ActionTypes';
import store from '../store/store';

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

export const fetchData = () => dispatch => {
  const { from, to, amount } = store.getState();

  fetch(`https://www.amdoren.com/api/currency.php?api_key=${process.env.REACT_APP_API_KEY_AMDOREN}&from=${from}&to=${to}&amount=${amount}`)
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_DATA,
    payload: data.amount
  }));
}

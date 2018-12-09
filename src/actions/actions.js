import {
  CHANGE_AMOUNT,
  CHANGE_FROM_CURRENCY,
  CHANGE_TO_CURRENCY,
  INVERSE_CURRENCY,
  FETCH_DATA } from '../constants/ActionTypes';

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


export function fetchData(data) {
  return {
    type: FETCH_DATA,
    payload: data
  }
}

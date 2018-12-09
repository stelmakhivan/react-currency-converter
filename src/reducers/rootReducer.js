import {
  CHANGE_AMOUNT,
  CHANGE_FROM_CURRENCY,
  CHANGE_TO_CURRENCY,
  INVERSE_CURRENCY,
  FETCH_DATA } from '../constants/ActionTypes';

export const initialState = {
  currencies: ['USD', 'EUR', 'UAH', 'PLN', 'RUB', 'GBP', 'CAD'],
  from: 'USD',
  to: 'EUR',
  amount: 1,
  result: '',
  isLoaded: false
}

export function rootReducer(state = initialState, action) {
  let result, from, to = ''
  switch (action.type) {
    case CHANGE_AMOUNT:
      const amount = Number(action.payload.amount)
      result = action.payload.result
      return { ...state, amount, result}

    case CHANGE_FROM_CURRENCY:
      from = action.payload.from
      result = action.payload.result
      return { ...state, from, result }

    case CHANGE_TO_CURRENCY:
      to = action.payload.to
      result = action.payload.result
      return { ...state, to, result }

    case INVERSE_CURRENCY:
      from = action.payload.from
      to = action.payload.to
      result = action.payload.result
      return { ...state, from, to, result}

    case FETCH_DATA:
      return { ...state, result: action.payload }

    default:
      return state
  }
}

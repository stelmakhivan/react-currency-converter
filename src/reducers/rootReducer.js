import {
  CHANGE_AMOUNT,
  CHANGE_FROM_CURRENCY,
  CHANGE_TO_CURRENCY,
  INVERSE_CURRENCY,
  FETCH_DATA,
  FETCH_START } from '../constants/ActionTypes';

export const initialState = {
  currencies: ['USD', 'EUR', 'UAH', 'PLN', 'RUB', 'GBP', 'CAD'],
  from: 'USD',
  to: 'EUR',
  amount: 1,
  result: '',
  isLoaded: false
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_AMOUNT: {
      const amount = Number(action.payload.amount)
      const result = action.payload.result
      return { ...state, amount, result}
    }

    case CHANGE_FROM_CURRENCY: {
      const { from, result } = action.payload
      return { ...state, from, result }
    }

    case CHANGE_TO_CURRENCY: {
      const { to, result } = action.payload
      return { ...state, to, result }
    }

    case INVERSE_CURRENCY: {
      const { from, to, result } = action.payload
      return { ...state, from, to, result};
    }

    case FETCH_START: {
      return { ...state, result: action.payload };
    }

    case FETCH_DATA: {
      return { ...state, result: action.payload };
    }

    default:
      return state
  }
}

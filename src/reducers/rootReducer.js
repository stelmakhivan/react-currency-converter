export const initialState = {
  currencies: ['USD', 'EUR', 'UAH', 'PLN', 'RUB', 'GBP', 'CAD'],
  from: 'USD',
  to: 'EUR',
  amount: 1,
  result: '',
  isLoaded: false
}

export function rootReducer(state = initialState) {
  return state;
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { initialState } from '../reducers/rootReducer';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders without crashing', () => {
  const store = mockStore(initialState)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

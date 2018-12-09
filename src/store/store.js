import { createStore } from 'redux';
import { rootReducer, initialState } from '../reducers/rootReducer';

const store = createStore(rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { createStore } from 'redux';

const initialState = { value: 0 };
const incrementAction = { type: 'INCREMENT', payload: 5 };

const reducer = (state, action) => {
  return state;
};

const store = createStore(reducer);
console.log(store, '2.3');

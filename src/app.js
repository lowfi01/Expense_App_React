import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';

// Import Redux Store
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';

// firebase - testing
import './firebase/firebase';

// es6 promises - testing
// import './playground/promises';

// Setup Store variable to allow us to use the store functions
const store = configureStore();

// Test Data
store.dispatch(addExpense({ description: 'Water Bill', note: ' Nonsense', amount: 20 }));
store.dispatch(addExpense({ description: 'gym', note: 'nonsense', amount: 200 }));
store.dispatch(addExpense({ description: 'Holiday', note: 'Random Nonsense', amount: 5500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', note: 'Random Nonsense', amount: 5500, createdAt: 10000 }));
// store.dispatch(setTextFilter('gym'));
// store.dispatch(sortByAmount());

// This will show the state
// console.log(store.getState());

// This will show the filtered result, which searchs for water
// Note - we are passing the state to our function which is returning a filtered object
// const state = store.getState();
// const {expenses, filters} = state;
// const visible =  getVisibleExpenses(expenses, filters);
// console.log(visible);


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDom.render(jsx, document.getElementById('app'));

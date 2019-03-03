import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


// Import Redux Store
import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
// import firebase & googleAuthProvider
import {firebase, googleAuthProvider} from './firebase/firebase';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';

// import getVisibleExpenses from './selectors/expenses';

// // firebase - testing
// import './firebase/firebase';

// es6 promises - testing
// import './playground/promises';

// Setup Store variable to allow us to use the store functions
const store = configureStore(); // added for screenshot :D

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  // We only render the app once (when the user first visits the site) and not every time
  // they login or logout which is what would happen without the check.
  if(!hasRendered) {
    ReactDom.render(jsx, document.getElementById('app')); // render the application
    hasRendered = true; // application is now rendered, don't render again
  }
}

// loading screen while firebase data is called asychronously
ReactDom.render(<p>Loading....</p>, document.getElementById('app')); // render a loading screen

firebase.auth().onAuthStateChanged((user) => { // implement firebase googleAuthProvider
  if (user) {
    console.log('logged in and store user uid : ', user.uid);
    // lets store the uid to the redux store so we can track users
    store.dispatch(login(user.uid));
    // Run code when the person is logged in
    // Notice - will only run when promise is forfilled
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') { // lets check if the user is logging in before moving them :D
        history.push('/dashboard'); // redirect user to dashboard
      }
    });
  } else {
    console.log('logged out: ');
    store.dispatch(logout());
    // Run code when user is logged out
    renderApp(); // render applicaiton to prevent loading screen from running forever
    history.push('/'); // redirect user to login
  }
});


// Test Data
// store.dispatch(addExpense({ description: 'Water Bill', note: ' Nonsense', amount: 20 }));
// store.dispatch(addExpense({ description: 'gym', note: 'nonsense', amount: 200 }));
// store.dispatch(addExpense({ description: 'Holiday', note: 'Random Nonsense', amount: 5500, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', note: 'Random Nonsense', amount: 5500, createdAt: 10000 }));
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

import { createStore } from 'redux';

// Action Generators, Return an object that is used in the action dispatch
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ( { count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
  count: 0
})

// Reducers
const CountReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: action.count
      };
    default:
      return state;
  }
}

// Store
const store = createStore(CountReducer);

// watches and fires whenever a change is made to the store

// Subscription that is triggered when there is a change to the store / state
const unsubscribe = store.subscribe(() => {
   console.log(store.getState());  // returns the state object
});

// Actions - Here we make an action, we pass an action generator  to it
store.dispatch(incrementCount( {incrementBy: 5} ));
store.dispatch(decrementCount( {decrementBy: 10} ));
store.dispatch(setCount({ count: -100 }));
store.dispatch( resetCount());

// This will stop the Subscription from watching the store for changes
unsubscribe(); // when this runs the subscribe will stop watching

// OLDER CODE WE USE TO EXPERIMENT
// // i'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT', // action to be performed
// });

// store.dispatch({
//   type: 'INCREMENT', // action to be performed
// });


// // I'd like to decrement the count value by 1
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// // i'd like to reset the count to zero
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 2
// });


// store.dispatch({
//   type: 'SET',
//   count: 101
// });

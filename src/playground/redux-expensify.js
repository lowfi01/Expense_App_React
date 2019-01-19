/* eslint-disable */
import { createStore, combineReducers } from 'redux';
// Cool little library that generates a unique id
import uuid from 'uuid';


// ACTION GENERATORS,
// Use action generators to return a object that will be used with our dispatch
// Note - we only do this to help maintability of our code

// actions for expense reducer state

// Add Expense
const addExpense = (
  {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})


// Remove Expense
const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


// Edit Expense
const editExpense = (id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Actions for the filter reducer state

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})

// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})


// We will create a reducer for expenses & filter

// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      // spread will create & return a new state array
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      // filter will return a new state array that does not contain the object we want to remove
      return state.filter((item) => item.id !== action.id)
    case 'EDIT_EXPENSE':
      // iterate over our state array, find the object with a matching id
      // use spread to then change the object properties
      return state.map((expenseObject) => {
        if (expenseObject.id === action.id){
          return {
            ...expenseObject,
            // use spread to add or update all properties found in this object
            ...action.updates  // updates = { amount: 500, name: 200 }
          };
        }

        return expenseObject;
      })
      default:
      return state;
  }
}

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
      case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state;
  }
}


// Store
const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );


// Timestamp (milliseconds)
// positive numbers count up from, January 1st 1970 (unix epoch)
// 33400 = 33.4 seconds from the unix epoch
// -33000 = 33 second before the unix epoch


// Get visible filters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>
  // remember the combineReducers, uses key value pairs for the object it makes
  // we have these two reducers in our store
  // {
  //  filters: filterReducer,
  //  expenses: expensesReducer
  // }

    expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());;

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b) => {

    if(sortBy === 'date') {
      return  a.createdAt < b.createdAt ? 1 : -1;
     }

     if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
     }

    })  // sort by date or amount, depending on filter.sortBy definition


// lets look at the state in its current form
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


// Dispatch our actions to change the state within the reducers/store
// // make dispatches to the to the expenses reducer
const expenseOne = store.dispatch(addExpense({ description: 'Udemy Tutorial', amount: 2000, createdAt: 10000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 500, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'A', amount: 5500, createdAt: 80000 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));  // expenseOne contians the id we want to delete
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500000 } ));


// // make dispatches to the filters reducer
// store.dispatch(setTextFilter('demy'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(200));
// store.dispatch(setEndDate());
// store.dispatch(setStartDate());


// State Example
const demoState = {
  expenses: [{
    id: '12312qwdfqwf',
    description: 'Some Description',
    note: 'Note with generic information',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    stateDate: undefined,
    endDate: undefined
  }
}
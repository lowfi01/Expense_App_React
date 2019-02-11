import uuid from 'uuid'; // eslint-disable-line
import database from '../firebase/firebase';

// Add Expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

// implement redux-thunk functionality
export const startAddExpense = (expenseData = {}) =>
  // This function will update the store for us
  // return function gives us access to dispatch so we can dispatch the action object to our store
   (dispatch) => {
    // do stuff before we call dispatch
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt};

    // we are only returning, so the chained promise within our test has access to data
    return database.ref('expenses').push(expense).then((ref) => {
     // use the promise to then dispatch the action object to redux store
     // Note - we don't actually want the id to be pushed to the database, only to the redux store.
     dispatch(addExpense({
       id: ref.key, // push success case will give then() access to ref property
       ...expense
     }));
    }).catch((e) => {
       console.log(' error pushing exenpse to firebase : ', e ) // eslint-disable-line
    });
  }

// Remove Expense
export const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


// Edit Expense
export const editExpense = (id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  })

export const startSetExpenses = () => (dispatch) =>
  // return for test purposes, we want the promise returned
   database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach(expense => {
          expenses.push({
            id: expense.key,
            ...expense.val()
          })
        });

        dispatch(setExpenses(expenses));
      })

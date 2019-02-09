import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

// mock store for testing purposes
const createMockStore = configureMockStore([thunk]); // you must pass the middleware we are using


test('should setup remove expense action object', () => {
  const result = removeExpense({ id : '12345' });
  // result object: {"id": "12345", "type": "REMOVE_EXPENSE"}

  expect(result).toEqual({
    'id': '12345',
    'type': 'REMOVE_EXPENSE'
  });

});


test('should setup edit expense action object', () => {
  const result = editExpense('123abc', { 'note' : 'Hello World' });

  expect(result).toEqual({
    'type' : 'EDIT_EXPENSE',
    'id' : '123abc',
    'updates' : {
      'note' : 'Hello World'
    }
  });

});


test('should setup add expense action object', () => {
  const expenseData ={
    'description': 'Test Data',
    'note' : 'Test Data for add expense action generator',
    'amount' : 100,
    'createdAt' : 1000
  };

  const result = addExpense(expenses[2]);
  // result Object {
  //     "type": "ADD_EXPENSE",
  //     "expense": Object {
  //       "amount": 100,
  //       "createdAt": 1000,
  //       "description": "Test Data",
  //       "id": "14253522-5913-4673-9a3b-6c2232702762",
  //       "note": "Test Data for add expense action generator",
  //     }
  //   }


  expect(result).toEqual({
    type : 'ADD_EXPENSE',
    expense: expenses[2]
    // expense : {
    //   ...expenseData,
    //   id : expect.any(String)
    // },
  });
})

// test('should setup add expense action object with default values', () => {
//   const result = addExpense();

//   expect(result).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       'description': '',
//       'note' : '',
//       'amount' : 0,
//       'createdAt' : 0,
//       'id' : expect.any(String)
//     }
//   });
// })


// test('should add expense to database and store', () => {
//   const store = createMockStore({});

//   store.dispatch(startAddExpense);

// })

// test('should add expense with defaults to database and store', () => {

// })
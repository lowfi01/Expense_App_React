import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

// mock store for testing purposes
const createMockStore = configureMockStore([thunk]); // you must pass the middleware we are using


beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({description, amount, note, createdAt, id}) => {
    expenseData[id] = { description, amount, note, createdAt };
  })
  database.ref('expenses').set(expenseData).then(() => {
    done();
  })
});

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
  // const expenseData ={
  //   'description': 'Test Data',
  //   'note' : 'Test Data for add expense action generator',
  //   'amount' : 100,
  //   'createdAt' : 1000
  // };

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

// passing done to ensure that the testcase is going to be asychronouse
test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'random note',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData))
    .then(() => { // chained promise, we use return in our expense.js action file for this reason
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });

})

test ('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})


// test('should add expense with defaults to database and store', () => {

// })
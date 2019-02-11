import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  // type @@INIT is the initial type redux calls.
  const state = expensesReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual([]);
});


test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id : expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id : '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});


test('should add an expense', () => {
  const expense = {
    description: '',
    amount: 2000,
    note: '',
    createdAt: 0
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
})

test('should edit an expense', () => {
  const updates = {
    note: 'Hello World!'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  }

  const state = expensesReducer(expenses, action);

  expect(state[0]).toEqual({
    ...expenses[0],
    ...updates
  })
});

test('should not edit an expense', () => {
  const updates = {
    note: 'Hello World!'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should set expenses to state', () => {
  const oldState = [
    {
      id: 1,
      description: 'OldState',
      note: '',
      amount: 199,
      createdAt: 0 // unix epoch jan 1st midnight 1970
    }
  ]
  const action = {
    type: 'SET_EXPENSES',
    expenses
  }

  const state = expensesReducer(oldState, action)
  expect(state).toEqual(expenses)
})
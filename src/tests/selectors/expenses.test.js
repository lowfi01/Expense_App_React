import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

import expenses from '../fixtures/expenses';


test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  // should return Gum & Rent
  const result = selectExpenses(expenses, filters);

  // just use the array we used for test data
  expect(result).toEqual([expenses[2], expenses[1]]);

})


test('should filter by startdate', () => {
  // filter from unix epoch, jan 1 midnight 1970
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
})

test('should filter by endDate', () => {
  // filter 4 days before the unix epoch, jan 1st 1970 midnight
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2] ]);
})

test('should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
})
import expenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return the total amount from multiple expenses we pass', () => {
  const result = expenseTotal(expenses);
  expect(result).toEqual(111699);
})

test('should return the return zero when no expenses are passed', () => {
  const result = expenseTotal([]);
  expect(result).toEqual(0);
})

test('should return the total amount from a single expense we pass', () => {
  const result = expenseTotal([expenses[0]]);
  expect(result).toEqual(199);
})
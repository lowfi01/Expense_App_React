import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary report with 1 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={200}/>);
  expect(wrapper).toMatchSnapshot();
})


test('should correctly render ExpensesSummary report with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={4} expensesTotal={24999}/>);
  expect(wrapper).toMatchSnapshot();
})


test('should correctly render Expenses Summary report with ', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
  expect(wrapper).toMatchSnapshot();
})

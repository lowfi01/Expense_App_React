import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseDashBoard } from '../../components/ExpenseDashBoard';

test('should render Expense Dash Board page', () => {
  const wrapper = shallow(<ExpenseDashBoard />);
  expect(wrapper).toMatchSnapshot();
});
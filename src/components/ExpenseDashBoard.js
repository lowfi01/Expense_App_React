import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

export const ExpenseDashBoard = (props) => (
    <div>
      <h1>Expense DashBoard</h1>
      <ExpenseListFilters />
      <ExpenseList />
      <ExpensesSummary />
    </div>

  )

export default ExpenseDashBoard;
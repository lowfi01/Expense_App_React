import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashBoard = (props) => (
    <div>
      <h1>Expense DashBoard</h1>
      <ExpenseListFilters />
      <ExpenseList />
    </div>

  )

export default ExpenseDashBoard;
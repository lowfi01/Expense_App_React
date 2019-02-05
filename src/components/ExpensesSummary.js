import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import SelectedExpenses from '../selectors/expenses';
import ExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 0 ? 'expenses' : 'expense';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
    <h1> Viewing {expenseCount} {expenseWord} with the value of {formattedExpensesTotal} </h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  expensesCount: SelectedExpenses(state.expenses, state.filters).length,
  expensesTotal: ExpensesTotal(SelectedExpenses(state.expenses, state.filters))
  })

export default connect(mapStateToProps)(ExpensesSummary);

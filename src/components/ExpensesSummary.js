import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

import SelectedExpenses from '../selectors/expenses';
import ExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 0 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');


  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title"> Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> </h1>
        <div className="page-header__action">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  expensesCount: SelectedExpenses(state.expenses, state.filters).length,
  expensesTotal: ExpensesTotal(SelectedExpenses(state.expenses, state.filters))
  })

export default connect(mapStateToProps)(ExpensesSummary);

import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';

// import { addExpense } from '../actions/expenses';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
  const onSubmit = (expense) => {
      props.dispatch(startAddExpense(expense));
      props.history.push('/');
    }
  return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>

        <div className="content-container">
          <ExpenseForm onSubmit={onSubmit} />
        </div>

      </div>
    )
  }

export default connect()(AddExpensePage);
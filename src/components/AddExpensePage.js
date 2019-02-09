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
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    )
  }

export default connect()(AddExpensePage);
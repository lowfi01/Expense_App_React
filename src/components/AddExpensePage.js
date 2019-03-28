import React from 'react';
import {connect} from 'react-redux';
import ReactGA from 'react-ga';
import ExpenseForm from './ExpenseForm';

// import { addExpense } from '../actions/expenses';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
  const onSubmit = (expense) => {
      // ReactGA.event({
      //   category: 'Create Expense',
      //   action: 'click button',
      //   label: 'expenses'
      // });
      ReactGA.ga('send', 'event', 'Create Expense', 'click button', 'expenses', 'value', {
        'dimension1': 'Create expense dimenion 1',
        'dimension2': 'Create expense dimension 2',
        'dimension3': 'Create expense dimension 3'
      })
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
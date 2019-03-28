import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log('props');
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>

      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
              // ReactGA.event({
              //   category: 'Edit Expense',
              //   action: 'clicked expense',
              //   label: 'expenses',
              //   dimension1: 'hello world'
              // });
              ReactGA.ga('send', 'event', 'Edit Expense', 'clicked expense', 'expenses', 'value', {
                'dimension1': 'Hello im a dimension',
                'dimension2': 'dimension 2',
                'dimension3': 'dimension 3'
              })
              props.dispatch(startEditExpense(props.match.params.id, expense));
              props.history.push('/');
          }}
        />
        <button
          className="button button--secondary"
          onClick={(e) => {
          e.preventDefault();
          ReactGA.event({
            category: 'Remove Expense',
            action: 'click button',
            label: 'expenses'
          });
          props.dispatch(startRemoveExpense({ id : props.expense.id}));
          props.history.push('/');

        }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  })

export default connect(mapStateToProps)(EditExpensePage);

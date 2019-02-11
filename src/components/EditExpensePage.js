import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
              props.dispatch(editExpense(props.match.params.id, expense));
              props.history.push('/');
        }}
      />
      <button onClick={(e) => {
        e.preventDefault();
        props.dispatch(startRemoveExpense({ id : props.expense.id}));
        props.history.push('/');
      }}  >Remove Expense</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  })

export default connect(mapStateToProps)(EditExpensePage);

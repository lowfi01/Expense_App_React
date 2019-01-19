import React from 'react';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';


import ExpenseItem from './ExpenseItem';

// we export this component as a named component for testing
export const ExpenseList = (props) => (
    <div>

      {
        props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          props.expenses.map((expense) =>
          <ExpenseItem key={expense.id} {...expense}/>)
        )
      }

    </div>
  );


const mapStateToProps = (state) => ({
  // selectExpenses is our filter function from selectors
  expenses: selectExpenses(state.expenses, state.filters)
 }
)

export default connect(mapStateToProps)(ExpenseList);


// connect is a HOC - Higher Order component, takes argument of component then return component.
// Note - connect also has an option to pass agruments
// We pass the information we want to connect, these are functions.
// The function gains access to the state from the argument


// const ConnectedExpenseList = connect((state) => ({
//     expenses: state.expenses
//    }
//   ))(ExpenseList);

// export default ConnectedExpenseList
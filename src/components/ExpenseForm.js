import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// // use moment
// const now = moment().format('MMMM Do, YYYY, h:mm:ss a');
// console.log(now);


class ExpenseFrom extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calenderFocused: false,
        error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }))
    }
  }

  // gets created with the moment object
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState( () => ({createdAt}));
    }

  }

  onFocuseChange = ({ focused }) => {
    this.setState(() => ({
      calenderFocused: focused
    }))
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))

      // Add validation layer, before sending state object to the parent
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount:  parseFloat(this.state.amount, 10) * 100,
        createdAt:  this.state.createdAt.valueOf(),
      });
    }

  }

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocuseChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            />
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default ExpenseFrom;
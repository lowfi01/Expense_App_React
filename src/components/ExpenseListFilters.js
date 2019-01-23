import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

// Import Action Generator
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  }

  onFocusedChanged = (calenderFocused) => {
      this.setState(() => ({
        calenderFocused
      }));
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  render() {
    return (
      <div>
      <input
      type="text"
      value={this.props.filters.text}  // value is defined by state value
      onChange={(e) => {
        this.props.dispatch(setTextFilter(e.target.value));
      }}/>

      <select
        value={this.props.filters.sortBy}
        onChange={(e) => {
         if(e.target.value === 'date') {
          this.props.dispatch(sortByDate());
         }
         if (e.target.value === 'amount') {
          this.props.dispatch(sortByAmount());
         }

        }}>
        <option value="date">date</option>
        <option value="amount">amount</option>
      </select>

      <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calenderFocused}
        onFocusChange={this.onFocusedChanged}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
    )
  }


}

const mapStateToProps = (state) => ({
    filters: state.filters
  })


export default connect(mapStateToProps)(ExpenseListFilters);
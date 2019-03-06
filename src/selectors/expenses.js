/* eslint-disable */



import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) =>
  // remember the combineReducers, uses key value pairs for the object it makes
  // we have these two reducers in our store
  // {
  //  filters: filterReducer,
  //  expenses: expensesReducer
  // }

    expenses.filter((expense) => {
      // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
      // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ;

      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b) => { // eslint-disable-line

    if(sortBy === 'date') {
      return  a.createdAt < b.createdAt ? 1 : -1;x
     } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
     }

    })  // sort by date or amount, depending on filter.sortBy definition


// export default getVisibleExpenses;
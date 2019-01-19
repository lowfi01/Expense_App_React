import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters';

test('should generate set start date action', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });

})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})


test('should generate a sort by date action object generator', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });

})

test('should generate a sort by amount action object generator', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
})

test('should generate set text filter object', () => {
  const text = 'Hello!';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text
  });
});


test('should generate set text filter object with default', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type : 'TEXT_FILTER',
    text : ''
  });
})
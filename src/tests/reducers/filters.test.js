import moment from 'moment';
import filterReducer from '../../reducers/filtersReducer';

test('should setup default filter values', () => {
  // type: @@init, is the first type called by redux.. allowing us to target the default state
  const state = filterReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),  // start of the month
    endDate: moment().endOf('month')
  })

})

test('should set sortBy to amount', () => {

  const state = filterReducer(undefined, {
    type: 'SORT_BY_AMOUNT'
  });

  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),  // start of the month
    endDate: moment().endOf('month')
  });
});

test('should set sortBy date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const action = {type: 'SORT_BY_DATE' }

  const state = filterReducer(currentState, action)

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  });
})

test('should set startDate', () => {

  const date = moment(0).add(4, 'days');
  const action = {
    type: 'SET_START_DATE',
    date
  }

  const state = filterReducer(undefined, action);

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(4, 'days'),  // start of the month
    endDate: moment().endOf('month')
  });
})


test('should set endDate', () => {

  const date = moment(0).add(4, 'days');
  const action = {
    type: 'SET_END_DATE',
    date
  }
  const state = filterReducer(undefined, action);

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),  // start of the month
    endDate: moment(0).add(4, 'days')
  });
})


test('should set text', () => {
  const text = 'Hello World';
  const action = {
    type: 'TEXT_FILTER',
    text
  };
  const state = filterReducer(undefined, action)

  expect(state).toEqual({
    text,
    sortBy: 'date',
    startDate: moment().startOf('month'),  // start of the month
    endDate: moment().endOf('month')
  })
})
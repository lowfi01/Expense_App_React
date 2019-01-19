import moment from 'moment';

// This is dummy data we use to replicate expenses data

export default [
  {
    id: 1,
    description: 'Gum',
    note: '',
    amount: 199,
    createdAt: 0 // unix epoch jan 1st midnight 1970
  },
  {
    id: 2,
    description: 'Credit Card',
    note: '',
    amount: 2000,
    // create a timestamp 4 days before the unix epoc
    // valueOf, coverts it back into ints
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: 3,
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
]
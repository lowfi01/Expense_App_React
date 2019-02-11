const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      // spread will create & return a new state array
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      // filter will return a new state array that does not contain the object we want to remove
      // console.log('REMOVE EXPENSE');
      // console.log(action.id);
      return state.filter((item) => item.id !== action.id)
    case 'EDIT_EXPENSE':
      // iterate over our state array, find the object with a matching id
      // use spread to then change the object properties
      return state.map((expenseObject) => {
        if (expenseObject.id === action.id){
          return {
            ...expenseObject,
            // use spread to add or update all properties found in this object
            ...action.updates  // updates = { amount: 500, name: 200 }
          };
        }

        return expenseObject;
      })
    case 'SET_EXPENSES':
      // should recieve expenses data and set it to state
      return action.expenses;

    default:
        return state;
  }
}

export default expensesReducer;
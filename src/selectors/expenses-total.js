const x = [{
  id: '1',
  description: '1',
  amount: 100
},
{
  id: '2',
  description: '1',
  amount: 100
},
{
  id: '3',
  description: '1',
  amount: 100
}]

// // Alternative solution to the problem, taking a more traditional route
// export default (expenses) => {
//   let sum = 0;
//   for (let i = 0; i < expenses.length; i++) {
//     sum += expenses[i].amount;
//   }
//   return(sum);
// }

export default (expenses) => {
  if (expenses.length === 0) return 0; // added if condition to make code easier to read
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}
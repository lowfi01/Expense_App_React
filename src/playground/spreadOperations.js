const names = ['james', 'germie', 'herrero'];
const newArray = [...names, 'tony'];
console.log(newArray);

const user = {
  name: 'james',
  age: '25'
};

const newUserObject = {
  ...user,
  name: 'James Herrero', // Change old property
  newProperty: 'Hello World' // Add new property
}

console.log(newUserObject);
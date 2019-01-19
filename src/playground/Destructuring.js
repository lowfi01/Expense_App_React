const address = ['738 doncaster rd', 'doncaster','melbourne', '3108'];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}`);


// const person = {
//   name: 'James',
//   age: 30,
//   location: {
//     city: 'Melbourne',
//     temp: 30
//   }
// }

// const { name, location: {city} } = person;
// console.log(`my name is ${name} i live in ${city}`); // output = my name is James I live in Melbourne


// const { age: old } = person;
// console.log(old);  // output 30


// const {cousin = 'kc'} = person;
// console.log(cousin); // output kc

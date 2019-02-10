// Create a promise we can call
const promise = new Promise((resolve, reject) => {
  setTimeout(() => { // add delay of 1.5 seconds
    // resolve('This is the success call example');
    // resolve('This is my other resolved data'); // THIS WILL NOT WORK, only one promise at a time
    reject('Something went terribly wrong'); // eslint-disable-line
  }, 1500)
});

/* eslint-disable */
// use promise
promise
  .then((data) => {
    // only fires when and if the promise resolves.
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => { // add delay of 1.5 seconds
        resolve('this is a new promise returned ')  }, 1500)
    });
  }).then((str) => {
    console.log('im the success case for the returned promise: ', str) // will print the resolve string from the return promise
  }).catch((error) => {  // we can catch errors and use rejects
    console.log('error', error);
  });


console.log('this will run first before promise');


// output:
// this will run first before promise
// This is the success call example
// This is the success call example

/* eslint-enable */

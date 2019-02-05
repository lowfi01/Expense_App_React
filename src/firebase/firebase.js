import * as firebase from 'firebase'; // use aliase to define firebase variable that will access all named exports


const config = {
  apiKey: 'AIzaSyBRLiJuSP02GXXruiEVFPJg3ud3OPyoEJo',
  authDomain: 'budget-app-version1.firebaseapp.com',
  databaseURL: 'https://budget-app-version1.firebaseio.com',
  projectId: 'budget-app-version1',
  storageBucket: 'budget-app-version1.appspot.com',
  messagingSenderId: '73862598915'
};

firebase.initializeApp(config); // enable firebase

const database = firebase.database();

// // child_removed event subscription - only check for removed items
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_changed event subscription - only check for changed items
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// child_added event subscription - only check when we add to the child
database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
})

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val()
//       });
//     })
//     console.log(expenses);
//   }, (e) => {
//       console.log(' error with subscription fetch of expenses : ', e )
//   })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key, // key will return the childsnapshot attribute name in database
//         ...childSnapShot.val()  // spread operator to spread all the other pieces of data we need
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((e) => {
//      console.log('error fetching expenses data : ', e )
//   })

// database.ref('expenses').push({
//   description: 'Car',
//   note: 'expensive',
//   amount: 200000,
//   createdAt: 10000
// });


// firebase.database().ref().set({
//   name: 'James'
// });

// database.ref().set({
//   name: 'james',
//   age: '20',
//   stressLevel: 5,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   wealth: '122200',
//   ren: 'something',
//   isSingle: false,
//   location: {
//     city: 'Melbourne',
//     country: 'Australia'
//   }
// }).then(() => {
//   console.log('Success')
// }).catch(error => {
//   console.log('error: ', error);
// });

// database.ref('isSingle').remove();
// database.ref('isSingle').set(null); // this will also delete the field from the database

// database.ref().update({
//   name: 'James Herrero',
//   age: '25',
//   isSingle: null,
//   'location/city': 'Doncaster'
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'Sydney',
// });


// fetch data using subscription based call
// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//     console.log(' error fetching data : ', e )
//   }) // this is an event call

// setTimeout(() => {
//  database.ref('age').set(21);
// }, 3500);


// setTimeout(() => {
//   database.ref().off(onValueChange);
//  }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
//  }, 10500);

// // fetch data from root of database
// database.ref()
//   .once('value')  // this is an event call
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log('database fetch : ', val);
//   })
//   .catch((e) => {
//     console.log('error fetching data : ', error);
//   })
import { firebase, googleAuthProvider } from '../firebase/firebase';


// this is a function that will allow us to pass a provideo or our choice
export const startLogin = () =>
    // return promise
    () => firebase.auth().signInWithPopup(googleAuthProvider); // popup takes the provider as an option
    // call firebase related method here


export const startLogout = () => (() => firebase.auth().signOut());
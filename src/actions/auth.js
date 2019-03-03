import { firebase, googleAuthProvider } from '../firebase/firebase';

// ACTIONS to store uid to reducer after user has logged in
export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

// ACTION to remove uid from reducer after user logs out
export const logout = () => ({
    type: 'LOGOUT'
})

// ACTIONS TO DEFINE LOGIN using google provider

// this is a function that will allow us to pass a provider of our choice
// Login user in using the googleAuthProvider, contacts google for verification
export const startLogin = () =>
    // return promise
    () => firebase
        .auth()
        .signInWithPopup(googleAuthProvider); // popup takes the provider as an option

// Logout user from the googleAuthProvider, contact google for varification
export const startLogout = () => (
        () => firebase
            .auth()
            .signOut()
    );
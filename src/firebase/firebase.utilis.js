import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyA5y_lPHvAZ6k7aMkcXICaQAkTLJJD0jgY",
    authDomain: "cradle-store.firebaseapp.com",
    databaseURL: "https://cradle-store.firebaseio.com",
    projectId: "cradle-store",
    storageBucket: "cradle-store.appspot.com",
    messagingSenderId: "477142957291",
    appId: "1:477142957291:web:a0c7f95ba6162bb81d92ae",
    measurementId: "G-7XDCGKCQFZ" 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

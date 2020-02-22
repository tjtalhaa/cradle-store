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

export const createUserProfileDocument = async ( userAuth, additionalData) => {
    
    if( !userAuth ) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists){
        const { displayName , email
        } = userAuth ;
        const createdAt = new Date();

        try{
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         })
        }catch (error){
            console.log('error creating user ', error.message);
            
        }
    }

    return userRef;
        

    

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/firebase-auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCOnp-E0oGHrzwn0dqZa2av593WRo2DS-k",
    authDomain: "mix-buddy.firebaseapp.com",
    projectId: "mix-buddy",
    storageBucket: "mix-buddy.appspot.com",
    messagingSenderId: "32879133872",
    appId: "1:32879133872:web:5ddf2b240399fa10ebe775"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 
  
    if(!snapShot.exists) {
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
  
      }
    }
    return userRef;
  };

  // Initialize Firebase
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
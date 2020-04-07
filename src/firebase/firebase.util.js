import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLEobUNtzTsZ1VfkDZzznqs6myk62yFGg",
    authDomain: "clothing-db-81f5d.firebaseapp.com",
    databaseURL: "https://clothing-db-81f5d.firebaseio.com",
    projectId: "clothing-db-81f5d",
    storageBucket: "clothing-db-81f5d.appspot.com",
    messagingSenderId: "718101045871",
    appId: "1:718101045871:web:43e2b6151b67395a00239a",
    measurementId: "G-7GX8FEBP5K"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
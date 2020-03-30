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
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
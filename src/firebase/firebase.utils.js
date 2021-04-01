import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBFHNFl10spBfSt_vavv6bkiPKXx8u3xSk",
    authDomain: "ecommerce-85e36.firebaseapp.com",
    projectId: "ecommerce-85e36",
    storageBucket: "ecommerce-85e36.appspot.com",
    messagingSenderId: "359885011985",
    appId: "1:359885011985:web:d9873fbd79322c664685b0",
    measurementId: "G-RCSDJL3VNP"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider) 


  export default firebase;
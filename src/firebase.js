
// import firebase from 'firebase/app';
 import firestore, { getFirestore } from  "firebase/firestore"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3rla2U8-MdIrbA-BlBUvHR3Cwj3EQIOU",
    authDomain: "cart-6d09e.firebaseapp.com",
    projectId: "cart-6d09e",
    storageBucket: "cart-6d09e.appspot.com",
    messagingSenderId: "571223508522",
    appId: "1:571223508522:web:1da830921d55c155c26553"
  };

  firebase.initializeApp(firebaseConfig)


  export default getFirestore()
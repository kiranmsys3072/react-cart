import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import * as firebase from 'firebase'
import "firebase/firestore"
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3rla2U8-MdIrbA-BlBUvHR3Cwj3EQIOU",
  authDomain: "cart-6d09e.firebaseapp.com", 
  projectId: "cart-6d09e",
  storageBucket: "cart-6d09e.appspot.com",
  messagingSenderId: "571223508522",
  appId: "1:571223508522:web:1da830921d55c155c26553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);




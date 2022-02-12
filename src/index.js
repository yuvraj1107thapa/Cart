import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// change to 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAr2wkOvosbd7DJ3I33K7TyVcJyhxoPVuM",
    authDomain: "cart-87248.firebaseapp.com",
    projectId: "cart-87248",
    storageBucket: "cart-87248.appspot.com",
    messagingSenderId: "1055251269879",
    appId: "1:1055251269879:web:1bba26abfd2ebf39eeebf2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
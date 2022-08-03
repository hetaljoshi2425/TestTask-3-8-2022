import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUfC7LFVj-dREQNvoCbZPZ7en9d12zDwM",
  authDomain: "testtask-8a4ea.firebaseapp.com",
  projectId: "testtask-8a4ea",
  storageBucket: "testtask-8a4ea.appspot.com",
  messagingSenderId: "840959140341",
  appId: "1:840959140341:web:06ce58313b5e348dbfc0bc"
};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
//store database
const db = firebase.firestore;
//for Authorization
const auth = getAuth(app);

export { db, auth };
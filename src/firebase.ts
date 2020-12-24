import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHNzPtpiIfSYjknX7h2fqncUoT37983PI",
  authDomain: "vehicle-legal-system-56519.firebaseapp.com",
  projectId: "vehicle-legal-system-56519",
  storageBucket: "vehicle-legal-system-56519.appspot.com",
  messagingSenderId: "992147345628",
  appId: "1:992147345628:web:81e0a576366989aa21a419",
  measurementId: "G-Y9QVSFNB8Q"
};

  
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();


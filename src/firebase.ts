import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlZnO_WtOoBRPpzP93ApjMvqzybBKxR4c",
    authDomain: "vehicle-legal-system.firebaseapp.com",
    databaseURL: "https://vehicle-legal-system.firebaseio.com",
    projectId: "vehicle-legal-system",
    storageBucket: "vehicle-legal-system.appspot.com",
    messagingSenderId: "750975524663",
    appId: "1:750975524663:web:3d447f8e4f1a8ede4284b2",
    measurementId: "G-TG7JM3L3QJ"
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();
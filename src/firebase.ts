import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
    apiKey: "AIzaSyAlZnO_WtOoBRPpzP93ApjMvqzybBKxR4c",
    authDomain: "vehicle-legal-system.firebaseapp.com",
    databaseURL: "https://vehicle-legal-system.firebaseio.com",
    projectId: "vehicle-legal-system",
    storageBucket: "vehicle-legal-system.appspot.com",
    messagingSenderId: "750975524663",
    appId: "1:750975524663:web:3d447f8e4f1a8ede4284b2",
    measurementId: "G-TG7JM3L3QJ"
  }; */

  const firebaseConfig = {
    apiKey: "AIzaSyCUXaQn64u7nPYO3_LEfTvjU0L76z0DjQ8",
    authDomain: "vls-test-19edf.firebaseapp.com",
    projectId: "vls-test-19edf",
    storageBucket: "vls-test-19edf.appspot.com",
    messagingSenderId: "286001692015",
    appId: "1:286001692015:web:4ae3a7f45f9f5b7724fc9a",
    measurementId: "G-TL4326YL7X"
  };

  
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();


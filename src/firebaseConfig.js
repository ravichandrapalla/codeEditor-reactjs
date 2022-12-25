// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvpguIqdaYP7Jt8UiDYzlT8UBQWsde1pk",
  authDomain: "code-editor-67957.firebaseapp.com",
  projectId: "code-editor-67957",
  storageBucket: "code-editor-67957.appspot.com",
  messagingSenderId: "762316100715",
  appId: "1:762316100715:web:e03f683df8ab809b14cd2e",
  measurementId: "G-S5PML60G52",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { db, auth };

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGETMg0a7yySPsb908lnJym-iBONE9PFs",
  authDomain: "fir-4fc91.firebaseapp.com",
  projectId: "fir-4fc91",
  storageBucket: "fir-4fc91.appspot.com",
  messagingSenderId: "1061561260331",
  appId: "1:1061561260331:web:c867facc0bd1f55d44cd6e",
  measurementId: "G-TCLZ5GT5KF",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

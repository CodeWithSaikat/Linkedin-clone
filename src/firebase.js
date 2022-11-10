// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_YrSnzgZCe5v4kfjkpnWi_3q1a8q2788",
  authDomain: "linkedin-clone-9b12a.firebaseapp.com",
  projectId: "linkedin-clone-9b12a",
  storageBucket: "linkedin-clone-9b12a.appspot.com",
  messagingSenderId: "192094602661",
  appId: "1:192094602661:web:77e7c069e439e9dad7944c",
  measurementId: "G-HFC81Q3QWF",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;

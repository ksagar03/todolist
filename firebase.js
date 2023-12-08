// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSxi1d1BGrJJDcaHc9EID9Z_FBhHcnHC4",
  authDomain: "todo-list-62d8f.firebaseapp.com",
  projectId: "todo-list-62d8f",
  storageBucket: "todo-list-62d8f.appspot.com",
  messagingSenderId: "492430129964",
  appId: "1:492430129964:web:93c849be8fbeb0201f0a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)

const useruid  = auth.currentUser ? auth.currentUser?.uid : null 

export {auth, db, useruid} 
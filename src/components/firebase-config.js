// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_tedCWXo78wuvmsz42yXRbf4H-ED_mnw",
  authDomain: "ucon-app.firebaseapp.com",
  projectId: "ucon-app",
  storageBucket: "ucon-app.appspot.com",
  messagingSenderId: "143522643234",
  appId: "1:143522643234:web:d27ac795d6231d4d5f797b",
  measurementId: "G-N9NQ2GQ6B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

 const auth = getAuth(app);
export {auth,db};
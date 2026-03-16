// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU78FIH2vbU_8VMuYPwFA1zau2tQ-8yZk",
  authDomain: "react-firebase-app-5c9a5.firebaseapp.com",
  projectId: "react-firebase-app-5c9a5",
  storageBucket: "react-firebase-app-5c9a5.firebasestorage.app",
  messagingSenderId: "356871971660",
  appId: "1:356871971660:web:b0ea47e7b3fc90981ba5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
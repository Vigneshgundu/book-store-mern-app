// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwx03gxiu5xn6Diu9wW36P7wndj5W3PPg",
  authDomain: "book-store-mern-app-bf949.firebaseapp.com",
  projectId: "book-store-mern-app-bf949",
  storageBucket: "book-store-mern-app-bf949.firebasestorage.app",
  messagingSenderId: "766972555945",
  appId: "1:766972555945:web:7a388eff310d545197afb8",
  measurementId: "G-QP1BWBNKBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth(app);

/// getting error when i try to import env files from .env.local so after this work on it
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb-_B98t-sgjX88mIN2nBe8DCLgsCUlHc",
  authDomain: "poopoo-413ce.firebaseapp.com",
  projectId: "poopoo-413ce",
  storageBucket: "poopoo-413ce.appspot.com",
  messagingSenderId: "578856518231",
  appId: "1:578856518231:web:4b3251a9586e5afbeed912",
  databaseURL: "https://poopoo-413ce-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
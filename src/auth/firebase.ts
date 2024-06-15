// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF37l8Zj9D0ouQUErWnwvEvk7rdpa-q9U",
  authDomain: "blade-shop.firebaseapp.com",
  projectId: "blade-shop",
  storageBucket: "blade-shop.appspot.com",
  messagingSenderId: "955855672865",
  appId: "1:955855672865:web:2b834303cb86719fc13560",
  measurementId: "G-LDGTCF51NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
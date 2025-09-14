// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
//authDomain: "vingoauth.firebaseapp.com",
//  projectId: "vingoauth",
  //storageBucket: "vingoauth.firebasestorage.app",
 // messagingSenderId: "477598038061",
  //appId: "1:477598038061:web:19fd086a875cef409d20a4"
   authDomain: "vingo-food-5ab70.firebaseapp.com",
  projectId: "vingo-food-5ab70",
  storageBucket: "vingo-food-5ab70.firebasestorage.app",
  messagingSenderId: "113329572263",
  appId: "1:113329572263:web:b7e2c6b729853e4d9c4e82",
  measurementId: "G-N2QLQVD440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}
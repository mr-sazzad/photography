// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCldC-2V-kLzfAdcuS3S83OKwUnKicmyww",

  authDomain: "photography-d3c58.firebaseapp.com",

  projectId: "photography-d3c58",

  storageBucket: "photography-d3c58.appspot.com",

  messagingSenderId: "397474808877",

  appId: "1:397474808877:web:3c1988dd5050fb3197e4a4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app; 
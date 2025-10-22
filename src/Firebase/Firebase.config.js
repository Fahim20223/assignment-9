// DANGER!!!!!!!!!!!!!!!!!!!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLm2wZ28lwOpjK8LYf7KXIxCjV9YHksSE",
  authDomain: "assignment-9-4089f.firebaseapp.com",
  projectId: "assignment-9-4089f",
  storageBucket: "assignment-9-4089f.firebasestorage.app",
  messagingSenderId: "924895199161",
  appId: "1:924895199161:web:98c99056f17d3ab7894068",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

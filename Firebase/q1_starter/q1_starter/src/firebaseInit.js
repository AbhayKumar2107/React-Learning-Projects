// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_JuNgAbimbbDyYHv_SI70cUDh0E4qIgQ",
  authDomain: "blogging-app-836f7.firebaseapp.com",
  projectId: "blogging-app-836f7",
  storageBucket: "blogging-app-836f7.firebasestorage.app",
  messagingSenderId: "283455765212",
  appId: "1:283455765212:web:c936286b1ac3fa11299219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
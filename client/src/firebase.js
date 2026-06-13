// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "websitebuilder-90686.firebaseapp.com",
  projectId: "websitebuilder-90686",
  storageBucket: "websitebuilder-90686.firebasestorage.app",
  messagingSenderId: "894025742075",
  appId: "1:894025742075:web:b9fcd2d9d0eea8980ce25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}

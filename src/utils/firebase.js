// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apiKey = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netflix-ai-5529e.firebaseapp.com",
  projectId: "netflix-ai-5529e",
  storageBucket: "netflix-ai-5529e.firebasestorage.app",
  messagingSenderId: "831866360035",
  appId: "1:831866360035:web:cb884ea1bbf39ca4a6f5d6",
  measurementId: "G-ML4MGENYFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
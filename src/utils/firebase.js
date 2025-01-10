// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "netflix-ai-5529e.firebaseapp.com",
  projectId: "netflix-ai-5529e",
  storageBucket: "netflix-ai-5529e.firebasestorage.app",
  messagingSenderId: "831866360035",
  appId: "1:831866360035:web:cb884ea1bbf39ca4a6f5d6",
  measurementId: "G-ML4MGENYFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
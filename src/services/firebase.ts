// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_0a2WKnnr3kSrF7t5PHIgNgi2OUUpz90",
  authDomain: "rpg-dos-crias.firebaseapp.com",
  projectId: "rpg-dos-crias",
  storageBucket: "rpg-dos-crias.firebasestorage.app",
  messagingSenderId: "612435005938",
  appId: "1:612435005938:web:fd4558898927515c879b6b"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

export {
  db
}
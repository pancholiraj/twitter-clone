import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYwFNMhviMwCGEeiIU01RMtgyam1z9qWc",
  authDomain: "twitter-clone-a5a3f.firebaseapp.com",
  projectId: "twitter-clone-a5a3f",
  storageBucket: "twitter-clone-a5a3f.appspot.com",
  messagingSenderId: "342671018082",
  appId: "1:342671018082:web:535e65f5789b470440693b",
  measurementId: "G-540KGR6KL0",
};

// init firebase app
initializeApp(firebaseConfig);

// inti services
const db = getFirestore();
export default db;

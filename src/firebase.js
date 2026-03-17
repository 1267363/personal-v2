// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  projectId: "xxxx",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Setup
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Optional: Forces the account picker to show up every time
provider.setCustomParameters({ prompt: 'select_account' });

// Auth Functions
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore Setup
export const db = getFirestore(app);
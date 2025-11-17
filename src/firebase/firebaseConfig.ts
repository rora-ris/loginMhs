// src/firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj9D6OCTseVKXMed53cdoOl0LSiIlBUzY",
  authDomain: "loginmhs-5e189.firebaseapp.com",
  projectId: "loginmhs-5e189",
  storageBucket: "loginmhs-5e189.firebasestorage.app",
  messagingSenderId: "275335480026",
  appId: "1:275335480026:web:0c946904a822341239dbe3",
  measurementId: "G-2N6C66D8RE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
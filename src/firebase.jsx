import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.Firebase_API,
  authDomain: "clone-app-c3418.firebaseapp.com",
  projectId: "clone-app-c3418",
  storageBucket: "clone-app-c3418.firebasestorage.app",
  messagingSenderId: "459206592114",
  appId: "1:459206592114:web:38b6a623701621dea5e4eb",
  measurementId: "G-0DHGVP5Z7R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

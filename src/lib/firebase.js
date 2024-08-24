import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO8yPii9FUsu5C8Gt5ri8eAoL5ahU5qGI",
  authDomain: "tripwanderer-f58d6.firebaseapp.com",
  projectId: "tripwanderer-f58d6",
  storageBucket: "tripwanderer-f58d6.appspot.com",
  messagingSenderId: "56403287634",
  appId: "1:56403287634:web:02e9db53d545bed5e1498b",
  measurementId: "G-5HTRYMMFM4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

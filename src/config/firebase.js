
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAUcLQ8MquHCfb4GnmICVusQyYtwE7Z4qM",
  authDomain: "tasks-store.firebaseapp.com",
  projectId: "tasks-store",
  storageBucket: "tasks-store.appspot.com",
  messagingSenderId: "459619243151",
  appId: "1:459619243151:web:9aea520575338cad5dccfa",
  measurementId: "G-368QS44678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
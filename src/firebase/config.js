import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8qfGrMvG8pyXhCHxmA8XGk7RUC9pHHik",
  authDomain: "mini-blog-1.firebaseapp.com",
  projectId: "mini-blog-1",
  storageBucket: "mini-blog-1.appspot.com",
  messagingSenderId: "411749677174",
  appId: "1:411749677174:web:775bca32b94c63f8d80757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
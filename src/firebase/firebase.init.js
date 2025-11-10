// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5xZEDBcwzdceIt0yPPl4iZNqtHI7PONA",
  authDomain: "finease-assignment-10.firebaseapp.com",
  projectId: "finease-assignment-10",
  storageBucket: "finease-assignment-10.firebasestorage.app",
  messagingSenderId: "965463213795",
  appId: "1:965463213795:web:7ddc05df6380ca72b0a7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
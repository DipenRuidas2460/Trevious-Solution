// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQoAwfTFNXyaY8REhrxO5U35PUw1GzD_c",
  authDomain: "news-reader-459cc.firebaseapp.com",
  projectId: "news-reader-459cc",
  storageBucket: "news-reader-459cc.appspot.com",
  messagingSenderId: "654717029728",
  appId: "1:654717029728:web:1d2926e055945b3c9d6205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
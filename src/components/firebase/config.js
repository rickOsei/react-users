// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-j8Zbn7tlQpO3zVp8VBgOMcsqBv_0T-I",
  authDomain: "student-user-56be8.firebaseapp.com",
  projectId: "student-user-56be8",
  storageBucket: "student-user-56be8.appspot.com",
  messagingSenderId: "588494870778",
  appId: "1:588494870778:web:b6f3b755ad849304861143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

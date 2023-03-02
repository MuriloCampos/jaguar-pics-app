// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKJuWOTuCCAeOjXDKEzBwerijypU3uUSQ",
  authDomain: "jaguarpics-82abd.firebaseapp.com",
  projectId: "jaguarpics-82abd",
  storageBucket: "jaguarpics-82abd.appspot.com",
  messagingSenderId: "224718329073",
  appId: "1:224718329073:web:81291192a887f7c4534550",
  measurementId: "G-X6VCV9J3KF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzLt1vM_RN2u9H6Ca0ESkAALwf9HqP0kc",
  authDomain: "codetrip-33a81.firebaseapp.com",
  projectId: "codetrip-33a81",
  storageBucket: "codetrip-33a81.appspot.com",
  messagingSenderId: "325626051132",
  appId: "1:325626051132:web:d4e289f9e2941d9cf7a139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
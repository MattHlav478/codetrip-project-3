// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzLt1vM_RN2u9H6Ca0ESkAALwf9HqP0kc",
  authDomain: "codetrip-33a81.firebaseapp.com",
  projectId: "codetrip-33a81",
  storageBucket: "codetrip-33a81.appspot.com",
  messagingSenderId: "325626051132",
  appId: "1:325626051132:web:d4e289f9e2941d9cf7a139",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize and export Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize and export Firebase Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// may not need this, but it references main storage location
export const storageRef = ref(storage)

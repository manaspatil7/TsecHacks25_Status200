// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0HoVWlo392bwhjIXKCpYH1oyZMeKDDu4",
  authDomain: "nitinpatil-5e333.firebaseapp.com",
  projectId: "nitinpatil-5e333",
  storageBucket: "nitinpatil-5e333.firebasestorage.app",
  messagingSenderId: "665353015175",
  appId: "1:665353015175:web:e4c00987dd752d408bcd22",
  measurementId: "G-HMRS6R16WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
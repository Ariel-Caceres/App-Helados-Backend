// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'dotenv/config';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "heladitos-backend",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "275229038538",
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-HS2VK86QCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCgOjqa8XKcFFxxky1ZWlj5czHJIfIDrY",
  authDomain: "productivity-dashboard-156bb.firebaseapp.com",
  projectId: "productivity-dashboard-156bb",
  storageBucket: "productivity-dashboard-156bb.firebasestorage.app",
  messagingSenderId: "585912441300",
  appId: "1:585912441300:web:75908d88fbee8ff6341e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJk-S9dWt3m2LDUdgTEISQIIMOX8szwsM',
  authDomain: 'contact-app-c5e5e.firebaseapp.com',
  projectId: 'contact-app-c5e5e',
  storageBucket: 'contact-app-c5e5e.appspot.com',
  messagingSenderId: '39437347873',
  appId: '1:39437347873:web:eef94ab01af480334f8760',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

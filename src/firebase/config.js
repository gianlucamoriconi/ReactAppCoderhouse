// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwQ37Y8CSwb76xCG_PnE_pTg7bPupyb_M",
  authDomain: "marstation-6ab43.firebaseapp.com",
  projectId: "marstation-6ab43",
  storageBucket: "marstation-6ab43.appspot.com",
  messagingSenderId: "763648978139",
  appId: "1:763648978139:web:20aa9fb13ca8c339ce70fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWFRk8FYv-GrFc75PYfY21Z6F4ooAE6Vg",
    authDomain: "xharptech.firebaseapp.com",
    projectId: "xharptech",
    storageBucket: "xharptech.appspot.com",
    messagingSenderId: "1058621843101",
    appId: "1:1058621843101:web:53412535392cc910879674",
    measurementId: "G-LTJK0WXZS2"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
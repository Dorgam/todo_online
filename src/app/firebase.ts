// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr1yowWdzVwfQGOUKaDBGNI_pGA1d2bFc",
  authDomain: "todo-efe47.firebaseapp.com",
  projectId: "todo-efe47",
  storageBucket: "todo-efe47.appspot.com",
  messagingSenderId: "938548298169",
  appId: "1:938548298169:web:dc73e18ce595ffccdeb668",
  measurementId: "G-ZTKSWWCZ6C"
};

let app, analytics, functions = null;

const initializeFirebase = () => {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    functions = getFunctions(app);
    console.log("firebase initialized");
}

export { app, analytics, functions, initializeFirebase };
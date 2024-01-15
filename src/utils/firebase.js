// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNTScPCtp5V3f50iX1LiBW8yzenpgpKYE",
  authDomain: "shoppinguru-86069.firebaseapp.com",
  projectId: "shoppinguru-86069",
  storageBucket: "shoppinguru-86069.appspot.com",
  messagingSenderId: "254426312058",
  appId: "1:254426312058:web:36bc0bc46e973182207ac3",
  measurementId: "G-WS3V06TV85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

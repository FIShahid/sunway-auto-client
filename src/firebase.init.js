// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9hkvi0UibH1sciYziCaWmVd-eVHWUcLk",
  authDomain: "sunway-auto-parts.firebaseapp.com",
  projectId: "sunway-auto-parts",
  storageBucket: "sunway-auto-parts.appspot.com",
  messagingSenderId: "600921466795",
  appId: "1:600921466795:web:cf25692c85a870cee754ee"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
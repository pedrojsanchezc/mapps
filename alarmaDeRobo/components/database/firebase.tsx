// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8uqOJOjmsxHDbaZdAzsfx44OKxtC16tM",
  authDomain: "pruebaapp-9f709.firebaseapp.com",
  projectId: "pruebaapp-9f709",
  storageBucket: "pruebaapp-9f709.appspot.com",
  messagingSenderId: "668294447381",
  appId: "1:668294447381:web:60a6b6e468683b2d20291c"
};

// Initialize Firebase
let app;
if(firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app();
}

const auth = firebase.default.auth();

export { auth };

// import { initializeApp, auth } from "firebase/app";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeDY1zhH7IpM0m7fTislW471uDPk78gOM",
  authDomain: "linkedin-clone-b2eed.firebaseapp.com",
  projectId: "linkedin-clone-b2eed",
  storageBucket: "linkedin-clone-b2eed.appspot.com",
  messagingSenderId: "1031440000156",
  appId: "1:1031440000156:web:8aa5aca0e5e7ae7a6eb959",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

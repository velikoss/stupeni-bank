import {initializeApp} from "firebase/firebase-app";

const firebaseConfig = {
  apiKey: "AIzaSyDmRzSudkTmDL_kdv8kABlN7eyhV2zwMlQ",
  authDomain: "stupeni-bank.firebaseapp.com",
  projectId: "stupeni-bank",
  storageBucket: "stupeni-bank.appspot.com",
  messagingSenderId: "799485684134",
  appId: "1:799485684134:web:f332b42170286fbdd6c767",
  measurementId: "G-G6NTES6Z19"
};

const app = initializeApp(firebaseConfig);

export default app;

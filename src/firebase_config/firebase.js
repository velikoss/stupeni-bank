import firebase from "firebase/compat";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDmRzSudkTmDL_kdv8kABlN7eyhV2zwMlQ",
  authDomain: "stupeni-bank.firebaseapp.com",
  projectId: "stupeni-bank",
  storageBucket: "stupeni-bank.appspot.com",
  messagingSenderId: "799485684134",
  appId: "1:799485684134:web:f332b42170286fbdd6c767",
  measurementId: "G-G6NTES6Z19"
})

export const auth = app.auth()
export default app

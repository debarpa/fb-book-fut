// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAixFVDR-9G49l8oZVejQoeBHYEncPsiOI",
  authDomain: "fb-book-7d719.firebaseapp.com",
  projectId: "fb-book-7d719",
  storageBucket: "fb-book-7d719.appspot.com",
  messagingSenderId: "410030103050",
  appId: "1:410030103050:web:bf44515c77883ed9d4ddf3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
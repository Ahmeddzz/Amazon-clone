// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAGXl_fman5xTw9khcOK50Hb0RiaVDxXYI",
    authDomain: "clone-72668.firebaseapp.com",
    projectId: "clone-72668",
    storageBucket: "clone-72668.appspot.com",
    messagingSenderId: "587775631083",
    appId: "1:587775631083:web:b440f94141c8bdda44a8ae",
    measurementId: "G-WC2KYTBBT0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore(); // realtime data base

  const auth = firebase.auth(); // signing in etc



  export {db, auth};
  
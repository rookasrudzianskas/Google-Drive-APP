import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDS0lgR1mDc6XgF55bhnfpsaDnSgnuLbtE",
    authDomain: "rookas-drive-app.firebaseapp.com",
    projectId: "rookas-drive-app",
    storageBucket: "rookas-drive-app.appspot.com",
    messagingSenderId: "609463869730",
    appId: "1:609463869730:web:c534791936eeb84f29857b",
    measurementId: "G-QCJDC3KZ0S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export {auth, provider, db, storage};

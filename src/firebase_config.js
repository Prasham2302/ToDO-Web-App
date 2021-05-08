import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyC8b74XoRAJN0DGeNgXzq2rLFoxs6-5pT4",
    authDomain: "todoapp-fe035.firebaseapp.com",
    projectId: "todoapp-fe035",
    storageBucket: "todoapp-fe035.appspot.com",
    messagingSenderId: "488452084330",
    appId: "1:488452084330:web:f5eb1bbe6c59f320d83013"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};
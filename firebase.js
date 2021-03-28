import firebase from'firebase'

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyAIdSD9N5jhWkla_QfI4Er2BKTu79n7UsM",
    authDomain: "facebook-messenger-26039.firebaseapp.com",
    projectId: "facebook-messenger-26039",
    storageBucket: "facebook-messenger-26039.appspot.com",
    messagingSenderId: "941364254944",
    appId: "1:941364254944:web:4b646afadcf2011ec79885",
    measurementId: "G-4TXCN75TRL"
});


const db = firebaseApp.firestore();

export { db };

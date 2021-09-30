import firebase from "firebase/compat";


const firebaseConfig = {
    apiKey: "AIzaSyCT8B3qfuo-NGqysdyNnn5b4mcZM38udL0",
    authDomain: "csse-project-final.firebaseapp.com",
    projectId: "csse-project-final",
    storageBucket: "csse-project-final.appspot.com",
    messagingSenderId: "199182177339",
    appId: "1:199182177339:web:ea951142adad4a2f3a381e",
    measurementId: "G-WVH9M6HSXQ"
};

var firebaseapp = firebase.initializeApp(firebaseConfig);
export default firebaseapp;
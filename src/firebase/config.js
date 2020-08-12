import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVLLQGlniGYTfalb9tQ8-5OxBfF1b_WaQ",
    authDomain: "firegram-322a5.firebaseapp.com",
    databaseURL: "https://firegram-322a5.firebaseio.com",
    projectId: "firegram-322a5",
    storageBucket: "firegram-322a5.appspot.com",
    messagingSenderId: "851107402542",
    appId: "1:851107402542:web:b56e57dcdccb498cb320bf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };

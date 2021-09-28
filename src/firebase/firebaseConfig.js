import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2VWZrn5zCp_prkvKp_6v0wsvFp3UaZNY",
  authDomain: "burger-queen-4fe04.firebaseapp.com",
  projectId: "burger-queen-4fe04",
  storageBucket: "burger-queen-4fe04.appspot.com",
  messagingSenderId: "559584546360",
  appId: "1:559584546360:web:8f404d8ff2c3863eaae0cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
import firebase from "firebase/compat/app";
// import { getFirestore  } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBucnI03aLEO1rlVll56hRKm_Rx421DcaU",
  authDomain: "netflix-clone-sanjay.firebaseapp.com",
  projectId: "netflix-clone-sanjay",
  storageBucket: "netflix-clone-sanjay.appspot.com",
  messagingSenderId: "288481348094",
  appId: "1:288481348094:web:7b30a6db33cb099d4d18af"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//   const storage= firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
export default firebase;

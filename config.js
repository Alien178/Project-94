import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCUqzWnPjhW5ALdhvCbRaAREPBWXuTrkmM",
  authDomain: "watcherzone-b2c19.firebaseapp.com",
  projectId: "watcherzone-b2c19",
  storageBucket: "watcherzone-b2c19.appspot.com",
  messagingSenderId: "687847839310",
  appId: "1:687847839310:web:71e1396ace48b9f1b9951f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

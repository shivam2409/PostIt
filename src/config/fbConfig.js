import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDbsVZgatifdAy3-ZP6yMBxOgAenZrpsjY",
    authDomain: "postit-planner.firebaseapp.com",
    databaseURL: "https://postit-planner.firebaseio.com",
    projectId: "postit-planner",
    storageBucket: "postit-planner.appspot.com",
    messagingSenderId: "418788902957",
    appId: "1:418788902957:web:55a8dd04db0b383fc410a4",
    measurementId: "G-0FLDBQR7LW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;
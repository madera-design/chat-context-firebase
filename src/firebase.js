import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC6ht7hhwEtRyiY-w1itbenXSaseTB6Tdk",
    authDomain: "chat-71ade.firebaseapp.com",
    projectId: "chat-71ade",
    storageBucket: "chat-71ade.appspot.com",
    messagingSenderId: "227329644601",
    appId: "1:227329644601:web:b63c0959d6f082e9cc15e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}
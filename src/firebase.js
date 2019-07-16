import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCwtcs3hbq7P7YQ_9L8pH9QmWlT_ONXgjg",
  authDomain: "auth-ab417.firebaseapp.com",
  databaseURL: "https://auth-ab417.firebaseio.com",
  projectId: "auth-ab417",
  storageBucket: "",
  messagingSenderId: "219639255704",
  appId: "1:219639255704:web:a61120351a18fd1a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

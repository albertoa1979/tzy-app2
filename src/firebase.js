import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvfbsuYSAbtw3Sl1QXYdtYk8L9pxQT-s0",
  authDomain: "tzy-app2.firebaseapp.com",
  projectId: "tzy-app2",
  storageBucket: "tzy-app2.appspot.com",
  messagingSenderId: "220471244771",
  appId: "1:220471244771:web:a801c52c4ba1965ba652d6"
};

const firebase = firebase.initializaApp(firebaseConfig);

const auth = firebase.auth();

export {auth}
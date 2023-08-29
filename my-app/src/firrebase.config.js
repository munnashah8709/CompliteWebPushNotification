import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCVIgz18_d5Xt2ciKxH5mCHjEITuhUZDAo",
    authDomain: "fir-practice-df662.firebaseapp.com",
    projectId: "fir-practice-df662",
    storageBucket: "fir-practice-df662.appspot.com",
    messagingSenderId: "40263921102",
    appId: "1:40263921102:web:699f48cabf7ade414d0f9f",
    measurementId: "G-2QRN80YD31"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider,messaging };
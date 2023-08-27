import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/messaging';

  const firebaseConfig = {
    apiKey: "AIzaSyAfWhDVl_IHDH8zvMTimEDZZZXtKNLocHA",
    authDomain: "pwa-app-d9e5d.firebaseapp.com",
    projectId: "pwa-app-d9e5d",
    storageBucket: "pwa-app-d9e5d.appspot.com",
    messagingSenderId: "222031465024",
    appId: "1:222031465024:web:4a18fc3937fe397bf3eda5"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider,messaging };
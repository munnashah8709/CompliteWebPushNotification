importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

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
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
const messaging = firebase.messaging();
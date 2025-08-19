// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB1vxcCwPyNeKrBLhhkJGhT5uJM-8Ooi3w",
  authDomain: "push-notification-d974e.firebaseapp.com",
  projectId: "push-notification-d974e",
  storageBucket: "push-notification-d974e.firebasestorage.app",
  messagingSenderId: "282337500265",
  appId: "1:282337500265:web:3ef95c409e52e4871196f8",
  measurementId: "G-SSHRHNKCTQ",
});

const messaging = firebase.messaging();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB1vxcCwPyNeKrBLhhkJGhT5uJM-8Ooi3w",
  authDomain: "push-notification-d974e.firebaseapp.com",
  projectId: "push-notification-d974e",
  storageBucket: "push-notification-d974e.firebasestorage.app",
  messagingSenderId: "282337500265",
  appId: "1:282337500265:web:3ef95c409e52e4871196f8",
  measurementId: "G-SSHRHNKCTQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BA3ja6fCIWskZZYNaFBlkV6qkDLVd8lfgPwasHOxnr7IMRvrnPiWooRhKCDxNSL5iwckTMhz6jkKGE4j5dyvXjQ",
    });
    console.log("🚀 ~ generateToken ~ token:", token);
  }
};

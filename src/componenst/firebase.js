import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5I7NRQtZVwrTBHzXNya99-zRgpdL5bCo",
    authDomain: "roginregister.firebaseapp.com",
    projectId: "roginregister",
    storageBucket: "roginregister.firebasestorage.app",
    messagingSenderId: "1011079429709",
    appId: "1:1011079429709:web:b1ae52087669b12e44a604"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

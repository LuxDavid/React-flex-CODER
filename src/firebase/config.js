import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCn9Bw7MDrJG2jRyOju_ybgjnmjD-6UwAY",
    authDomain: "lux-videogames.firebaseapp.com",
    projectId: "lux-videogames",
    storageBucket: "lux-videogames.firebasestorage.app",
    messagingSenderId: "783974615859",
    appId: "1:783974615859:web:a362c5690e264a82ca8c46"
};

export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4v66LbyUQve7Z-QzI_fZp_iBTv24T7P8",
    authDomain: "php-dev-auth.firebaseapp.com",
    projectId: "php-dev-auth",
    storageBucket: "php-dev-auth.appspot.com",
    messagingSenderId: "204800133829",
    appId: "1:204800133829:web:bb5b1ef7acd288e784feac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
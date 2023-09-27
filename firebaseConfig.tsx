// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJeAt86pw-ahhm1U_rI0Ww_YTLvMjO5nI",
    authDomain: "gdrive-clone-7a9f2.firebaseapp.com",
    projectId: "gdrive-clone-7a9f2",
    storageBucket: "gdrive-clone-7a9f2.appspot.com",
    messagingSenderId: "1016258647622",
    appId: "1:1016258647622:web:fa324f8f1d65d7e3701c47",
    measurementId: "G-TJ9VQ7DCN9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
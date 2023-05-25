// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaEgZ7hUc8jHRrvU5SgDzpb8cXbg5AG-U",
    authDomain: "netflix-clone-17bcf.firebaseapp.com",
    projectId: "netflix-clone-17bcf",
    storageBucket: "netflix-clone-17bcf.appspot.com",
    messagingSenderId: "686886109243",
    appId: "1:686886109243:web:9b6b10840fea06d9829c1e",
    measurementId: "G-PRM45J4QSQ"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
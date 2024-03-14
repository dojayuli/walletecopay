// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAyVZRnJPH3ZD5XcY9c0KSrnWtJ92b4ORQ',
  authDomain: 'ecopay-e0578.firebaseapp.com',
  projectId: 'ecopay-e0578',
  storageBucket: 'ecopay-e0578.appspot.com',
  messagingSenderId: '282223783064',
  appId: '1:282223783064:web:e628285bb47bad91c234ed',
  measurementId: 'G-2TKJT69RVF'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }

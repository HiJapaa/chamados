import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBwLgUhcdekIDL4Oj5XUaFQfJbYZqRADW4",
    authDomain: "tickets-e555f.firebaseapp.com",
    projectId: "tickets-e555f",
    storageBucket: "tickets-e555f.appspot.com",
    messagingSenderId: "1021288156692",
    appId: "1:1021288156692:web:6754e055ad540a2dfd6101",
    measurementId: "G-JYQG01RKVW"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }
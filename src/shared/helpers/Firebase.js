// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);
const realtimeDb = getDatabase(app);

export { firestoreDb, realtimeDb };

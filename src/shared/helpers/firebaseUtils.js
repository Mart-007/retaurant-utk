// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA793IQCkTcixZktaNh5pUAGewce7jfdh4',
  authDomain: 'restaurant-utk.firebaseapp.com',
  projectId: 'restaurant-utk',
  storageBucket: 'restaurant-utk.appspot.com',
  messagingSenderId: '1032973753701',
  appId: '1:1032973753701:web:9c8f84e4300efae984d58c',
  measurementId: 'G-FTQ3L5RSN4',
};

const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);
const realtimeDb = getDatabase(app);

export { firestoreDb, realtimeDb };

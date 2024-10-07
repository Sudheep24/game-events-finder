import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage for Firebase Storage
import { getAuth } from "firebase/auth"; // Import getAuth for Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyDMN7586RIizo6MsbRf-iBHf8k-sAnCzxs",
  authDomain: "gamegatherer.firebaseapp.com",
  projectId: "gamegatherer",
  storageBucket: "gamegatherer.appspot.com",
  messagingSenderId: "951657871172",
  appId: "1:951657871172:web:b5b62f3fd7cf2b8cd20911",
  measurementId: "G-ZJ89NMSCWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app); 

// Initialize Firebase Authentication
export const auth = getAuth(app);

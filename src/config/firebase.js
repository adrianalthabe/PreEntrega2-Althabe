import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzwn7MdhhIBg2Ul1eGCkqaWISy-FPq6i0",
  authDomain: "proyectofinalreact-4e00e.firebaseapp.com",
  projectId: "proyectofinalreact-4e00e",
  storageBucket: "proyectofinalreact-4e00e.appspot.com",
  messagingSenderId: "684225928912",
  appId: "1:684225928912:web:80592a63050eb479a948d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };

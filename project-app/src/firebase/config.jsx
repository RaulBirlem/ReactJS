import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCV9jw6I0fp1D83m9avKX3QNqpHOfoTbLk",
  authDomain: "miniblog-2f403.firebaseapp.com",
  projectId: "miniblog-2f403",
  storageBucket: "miniblog-2f403.appspot.com",
  messagingSenderId: "856762676898",
  appId: "1:856762676898:web:24b48abac7199f6ab109fb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
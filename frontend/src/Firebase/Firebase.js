import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB7NsV6uG8gY95pqgnS0c-O3PHfG3fZkYc",
  authDomain: "twitter-9f392.firebaseapp.com",
  projectId: "twitter-9f392",
  storageBucket: "twitter-9f392.appspot.com",
  messagingSenderId: "1783685686",
  appId: "1:1783685686:web:3c5027467d215882246e97"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
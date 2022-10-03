
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCfSVDAXCx8jHlr83WzF3FnSDbsWJFYj6M",
  authDomain: "movie-df57a.firebaseapp.com",
  databaseURL: "https://movie-df57a-default-rtdb.firebaseio.com",
  projectId: "movie-df57a",
  storageBucket: "movie-df57a.appspot.com",
  messagingSenderId: "318654776125",
  appId: "1:318654776125:web:adf0057756735658e67b54",
  measurementId: "G-8E3GGKL0Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
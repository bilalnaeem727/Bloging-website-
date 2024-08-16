import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAlrDtGGdeAzAZzaYwgUWL2IjAxqTKoaf4",
    authDomain: "blog-website-dd68a.firebaseapp.com",
    projectId: "blog-website-dd68a",
    storageBucket: "blog-website-dd68a.appspot.com",
    messagingSenderId: "1013969474399",
    appId: "1:1013969474399:web:0e6fbf3ab4cf1b1a011cea",
    measurementId: "G-S64ZERXV0S"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{app , auth}
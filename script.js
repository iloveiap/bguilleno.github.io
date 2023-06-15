document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  })
})


import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA3hNSfCVyNqAk83UkasRGas4Vp9vSYlBU",
  authDomain: "chat-app-portfolio-24bc8.firebaseapp.com",
  databaseURL: "https://chat-app-portfolio-24bc8-default-rtdb.firebaseio.com",
  projectId: "chat-app-portfolio-24bc8",
  storageBucket: "chat-app-portfolio-24bc8.appspot.com",
  messagingSenderId: "845272638719",
  appId: "1:845272638719:web:04c2d34f43285acc65d8ca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from './firebaseConfig';

// Now you can use the `firebase` object to interact with Firebase services
const database = firebase.database();

import firebase from "firebase";


  // Initialize Firebase
//   const firebaseConfig = {
//     apiKey: "AIzaSyBeF_c21tN0cWBe-yb3bYkP1M3yqmtFPD4",
//     authDomain: "myinstagram-20388.firebaseapp.com",
//     projectId: "myinstagram-20388",
//     storageBucket: "myinstagram-20388.appspot.com",
//     messagingSenderId: "400859968479",
//     appId: "1:400859968479:web:5738e86e6238477a3fca6a"
//   };

// var firebaseConfig = {
//     apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
//     authDomain: "myapp-project-123.firebaseapp.com",
//     databaseURL: "https://myapp-project-123.firebaseio.com",
//     projectId: "myapp-project-123",
//     storageBucket: "myapp-project-123.appspot.com",
//     messagingSenderId: "65211879809",
//     appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
//     measurementId: "G-8GSGZQ44ST"
//   };

  firebase.initializeApp({
    apiKey: "AIzaSyBeF_c21tN0cWBe-yb3bYkP1M3yqmtFPD4",
    authDomain: "myinstagram-20388.firebaseapp.com",
    projectId: "myinstagram-20388",
    storageBucket: "myinstagram-20388.appspot.com",
    messagingSenderId: "400859968479",
    appId: "1:400859968479:web:5738e86e6238477a3fca6a"
  });

  const auth = firebase.auth();
  const storage = firebase.storage();

  export {storage, auth};
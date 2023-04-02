  import firebase from 'firebase';
  import "firebase/auth";
  import "firebase/firestore";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjPN0jarkJDflC7nHJugeXdOUVLtU9A-I",
  authDomain: "docs-app-9b346.firebaseapp.com",
  projectId: "docs-app-9b346",
  storageBucket: "docs-app-9b346.appspot.com",
  messagingSenderId: "166653415935",
  appId: "1:166653415935:web:e72d6b7ce3dc253e5857ca",
  measurementId: "G-7WJE5FVV1P"
};
  
  if (!firebase.apps.length) {
      var fire = firebase.initializeApp(firebaseConfig);
    
   }else {
     fire = firebase.app();
   }
  export default fire;
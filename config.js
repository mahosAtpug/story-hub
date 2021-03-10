import firebase from "firebase"
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCQoVe69LROoS60nWPTARNWGPrQ_se1g38",
    authDomain: "newsletter-382eb.firebaseapp.com",
    databaseURL: "https://newsletter-382eb-default-rtdb.firebaseio.com",
    projectId: "newsletter-382eb",
    storageBucket: "newsletter-382eb.appspot.com",
    messagingSenderId: "854321426996",
    appId: "1:854321426996:web:f8d6dd3a5525a88f815061"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore()
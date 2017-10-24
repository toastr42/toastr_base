import firebase from "firebase";

var config = {
    apiKey: "AIzaSyCJhlG41Yk_si3ah4c2M1JhPudlhoXM5q4",
    authDomain: "toastr-429e1.firebaseapp.com",
    databaseURL: "https://toastr-429e1.firebaseio.com",
    projectId: "toastr-429e1",
    storageBucket: "toastr-429e1.appspot.com",
    messagingSenderId: "224130504877"
  };
  
  firebase.initializeApp(config);

  export default firebase
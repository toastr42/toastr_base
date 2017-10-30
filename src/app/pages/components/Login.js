import React, {Component} from "react";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js"
import firebase from "firebase";

var provider = new firebase.auth.TwitterAuthProvider();
var googs = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {
    constructor () {
        super();

      this.state = {
        user: "",
      }
      /*   this.onFailed = this.onFailed.bind(this);
        this.onSuccess = this.onSuccess.bind(this); */
    }

    login = () => {
      // console.log("hi");
      firebase.auth().signInWithRedirect(provider).then((something) => console.log);
      
      // firebase.auth().getRedirectResult().then(function(result) {
      //   if (result.credential) {
      //     // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      //     // You can use these server side with your app's credentials to access the Twitter API.
      //     var token = result.credential.accessToken;
      //     var secret = result.credential.secret;
      //     // ...
      //   }
      //   // The signed-in user info.
      //   var user = result.user;
      // }).catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // The email of the user's account used.
      //   var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   var credential = error.credential;
      //   // ...
      // });
    }

    watch() {
      firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const welcomeMsg = "Welcome " + firebaseUser.displayName;
            this.props.personalize(welcomeMsg);
           /*  console.log(firebaseUser); */
     /*      console.log(firebaseUser.metadata);
          console.log(firebaseUser.displayName );
          console.log(firebaseUser.email);
          console.log(firebaseUser.uid); */
      } else {
          console.log(firebaseUser);
          console.log("not logged in");
      }
     });
    }

    googsLogin = () => {
      firebase.auth().signInWithRedirect(googs).then((something) => console.log);

      firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
          // You can use these server side with your app's credentials to access the Twitter API.
          var token = result.credential.accessToken;
          var secret = result.credential.secret;
          console.log(token);
          console.log(secret);
          console.log("hi");
          // ...
        }
    })
  
  }

  logout = () => {
    firebase.auth().signOut();
    console.log("logout called");
  }

  
/*   onSuccess(response) {
    response.json().then(body => {
      alert(JSON.stringify(body));
    });
  }

  onFailed(error) {
    console.log("here");
    alert(error);
  
  } */

  render() {
    return (
      <div>
        <button onClick={this.login}>login with twitter</button>
        <button onClick={this.googsLogin}>login with gooogs</button>
      
        <button onClick={this.logout}>logout</button>

      </div>
    );
  }
} 


/* <button onClick={this.fblogin}>login with the big FB</button> */
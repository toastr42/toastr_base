import React, {Component} from "react";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js"
import firebase from "firebase";

var provider = new firebase.auth.TwitterAuthProvider();
var googs = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {
    constructor () {
        super();

      this.state = {
        userTwitterToken: "",
        userTwitterSecret: "",
        tweet: "",
      }
      /*   this.onFailed = this.onFailed.bind(this);
        this.onSuccess = this.onSuccess.bind(this); */
    }

    login = () => {
      // console.log("hi");
      const self = this;
     firebase.auth().signInWithPopup(provider).then(function(result) {
        // For accessing the Twitter API.
        const token = result.credential.accessToken;
        const secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        var username = result.user.displayName;

        console.log("username");
        console.log(username);
        console.log("user token");
        console.log(token);
        console.log("user secret");
        console.log(secret);
        console.log("user");
        console.log(user);
      //  console.log(self, this);
         self.setState({
            userTwitterToken: result.credential.accessToken,
            userTwitterSecret: result.credential.secret,
        });
      });
      console.log("here");
    //  console.log(result);
      // this.setState({
      //   userTwitterToken: "have fun in",
      //   userTwitterSecret: "the sun",
      // })
      
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
        firebase.auth().signInWithPopup(googs).then(function(result) {
            // For accessing the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
    
            console.log("user token");
            console.log(token);
            console.log("user secret");
            console.log(secret);
            console.log("user");
            console.log(user);
          });
  
  }

  logout = () => {
    firebase.auth().signOut();
    console.log("logout called");
  }

  tweetytwit = () => {
      console.log("user token");
    
      console.log(this.state.tweet);
      console.log(this.state.userTwitterToken);
      console.log(this.state.userTwitterSecret);

    /*   var xmlHttp = new XMLHttpRequest();

      xmlHttp.open("POST", "https://api.twitter.com/1.1//statuses/update.json", false);
      
      // Make sure you set the appropriate headers
      xmlHttp.setRequestHeader('bearer ' + this.state.userTwitterToken);
      
      var data = "# body is your JSON/ XML/ test tweet/ Form Query/ etc"
      xmlHttp.send(data);
      
      var response = xmlHttp.responseText; */
  }
  
  handleTweetChange = (e) => {
    var tweet = e.target.value;
/*     console.log(tweet); */
    this.setState({tweet: tweet});
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
        <br/>
        <input onChange={this.handleTweetChange} placeholder={"tweet here"}/>
        <button onClick={this.tweetytwit}>Tweet</button>

      </div>
    );
  }
} 


/* <button onClick={this.fblogin}>login with the big FB</button> */
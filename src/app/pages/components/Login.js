import React, {Component} from "react";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js"
import firebase from "firebase";
/* import request from "ajax-request"; */
import $ from "jquery";
import GoogsLogin from "./google";
import TwitLogin from "./twitter";
import GithubLogin from "./github";
import FacebookLogin from "./facebook";
import RaisedButton from 'material-ui/RaisedButton';
import {red300} from 'material-ui/styles/colors';
import {red700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red100} from 'material-ui/styles/colors';
import IconButtonExampleTooltip from "./matuiex"



// import Twitter from "twitter-node-client";
var Twitter = require('twitter-node-client').Twitter;


var provider = new firebase.auth.TwitterAuthProvider();
var googs = new firebase.auth.GoogleAuthProvider();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: red300,
  },
});

// var config = {
//   "consumerKey": "9V4MrALUPnbEcxTL2uQmQgV4l",
//   "consumerSecret": "D6EpOyRHOnHpr7Ll6HGmV8WbrRg9iMwZfq99L3LUvi17uqvQQJ",
//   "accessToken": "	2834533010-CxSzbtoVwMBGCwyyMP2wu6s8lDAXPg7LDlpUaER",
//   "accessTokenSecret": "mSKECOTmbjRwfDZT9btqC3R88AvbLQ9xe1qaZP4yH43GI",
//   "callBackUrl": "https://localhost.toastr.com:3000/callback"
// }

// var twitter = new Twitter(config);


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

        console.log("username", username);
        console.log("user token", token);
        console.log("user secret", secret);
        console.log("user", user);
      //  console.log(self, this);
         self.setState({
            userTwitterToken: result.credential.accessToken,
            userTwitterSecret: result.credential.secret,
        });
      });
      console.log("here");

     
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

  

  tweetytwit = () => {
      console.log("user token");
      
      console.log(this.state.tweet);
      console.log(this.state.userTwitterToken);
      console.log(this.state.userTwitterSecret);

      // $.get("https://api.twitter.com/1.1/statuses/home_timeline.jsonp?", 
      // function(response) {
      //   console.log(response);
      // });
      // var httpRequest = new XMLHttpRequest();
      
      var apiUrl = 'https://api.github.com/users/stevejobs';

      // httpRequest.open('GET', apiUrl, false);

      var httpRequest = new XMLHttpRequest();
      
      var apiUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=seandarsie&count=10';

      httpRequest.open('GET', apiUrl, false);
      // httpRequest.send();
      // console.log(httpRequest.responseText);
    
      var twitter = new Twitter("../../../../data/twitter_config");
      var user = firebase.auth().currentUser;
      // twitter.getUserTimeline(
      //   {
      //   screen_name: "sean_D15",
      //   count: '10',
      //   }, function(err, res, body) {
      //     console.log("ERROR", err);
      //   }, function(data) {
      //     console.log("success", data);
      //   });

        twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, 
        function(err, res, body) {
          console.log("ERROR", err);
        }, function(data) {
          console.log("success", data);
        });
        
      // $.ajax({
      //   type: 'GET',
      //   url: 'https://api.twitter.com/1.1/account/verify_credentials.json?',
      //   Bearer: "kialvare " + this.state.userTwitterToken,
      //   success: function(data) {
      //     console.log(data);
      //   },

      // });
    /*   request({
        url: 'https://api.twitter.com/1.1/statuses/update.json',
        method: 'POST',
        data: {
          status: this.state.tweet,
        }
      }, function(err, res, body) {
        console.log(res);
        console.log(err);
        console.log(body);
      }); */
      
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
        <p>Login Section</p>
       <TwitLogin name="Twitter"/>
        <GoogsLogin name="Google"/>
        <GithubLogin name ="Github"/>
        <FacebookLogin name="Facebook"/>
       
      
        <br/>
        <input onChange={this.handleTweetChange} placeholder={"tweet here"}/>
        <button onClick={this.tweetytwit}>Tweet</button>
      </div>
    );
  }
} 


/* <button onClick={this.fblogin}>login with the big FB</button> */
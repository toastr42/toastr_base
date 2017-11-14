// facebook login component

import React, {Component} from "react";
import firebase from "firebase";
import RaisedButton from 'material-ui/RaisedButton';
import {blue300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

//var provider = new firebase.auth.FacebookAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();


const muiTheme = getMuiTheme({
    palette: {
      accent1Color: blue300,
    },
  });
  

export default class FacebookLogin extends Component {
    constructor (props) {
        super(props);

      this.state = {
        username: "",
      }
    }
    //TODO: this function does not work if the user has already made an account with the email 
    //account they used to make their facebook account they are trying to use to signin/up
    facebookLogin = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // For accessing the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
    
            console.log("user token", token);
            console.log("user secret", secret);
            console.log("user", user);
          });
  
  }

  render() {
    return (
        <RaisedButton backgroundColor={red700} onClick={this.facebookLogin}>{this.props.name}</RaisedButton>

    );
  }
}


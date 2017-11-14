// twitter login component
import React, {Component} from "react";
import firebase from "firebase";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {blue300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var provider = new firebase.auth.TwitterAuthProvider();

const muiTheme = getMuiTheme({
    palette: {
      accent1Color: blue300,
    },
  });
  
export default class TwitLogin extends Component {
    constructor (props) {
        super(props);

      this.state = {
        username: "",
      }
    }
    

  TwitterLogin = () => {
    // console.log("hi");
    var user = firebase.auth().currentUser;
    if (user) {
        console.log("user: ", user.displayName, " logged in");
    }    
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
    }

  render() {
    return (
       
        <RaisedButton secondary={true} onClick={this.TwitterLogin}>{this.props.name}</RaisedButton>
       
    );
  }
}


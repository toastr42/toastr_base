// github login component
import React, {Component} from "react";
import firebase from "firebase";
import RaisedButton from 'material-ui/RaisedButton';
import {blue300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import FileFolder from "material-ui/svg-icons/file/folder";
import ActionHome from 'material-ui/svg-icons/action/home';


var provider = new firebase.auth.GithubAuthProvider();

provider.addScope("repo");
provider.setCustomParameters({
    'allow_signup': 'false'
  });

const muiTheme = getMuiTheme({
    palette: {
      accent1Color: blue300,
    },
  });
  
export default class GithubLogin extends Component {
    constructor (props) {
        super(props);

      this.state = {
        username: "",
      }
    }
    
    githubLogin = () => {
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
        
      <RaisedButton backgroundColor={blue300} onClick={this.githubLogin}>{this.props.name}</RaisedButton>
    );
  }
}


// {/* <IconButton /* onClick={this.githubLogin} */ iconClassName="muidocs-icon-action-home" tooltip="Login with Github"
//         tooltipPosition="bottom-right">
//         </IconButton> */}

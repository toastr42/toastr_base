/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {blue300} from 'material-ui/styles/colors';
import {red700} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { TwitterLogin } from "react-twitter-auth";

import Tweet from "./Tweet";
import EmailLogin from "./components/EmailLogin";
import Login from "./components/Login";
import firebase from "firebase";
// import "./grids.css";
// import "css-grid";


firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
   /*    const welcomeMsg = "Welcome " + firebaseUser.displayName;
      this.props.personalize(welcomeMsg);
    */  
    console.log(firebaseUser.displayName);
    console.log("auth state observing function triggered");    
  } else {
      console.log(firebaseUser);
      console.log("not logged in");
  }
});

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue300,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      welcome: "Welcome To Toastr",
    };
  }

  personalize = () => {
    var user = firebase.auth().currentUser;
  
    if (user) {
      console.log(user.providerData[0]);
      var token = user.getIdToken();


      console.log(token);
      var welcomeMsg = "Welcome " + user.displayName + "!"; 
    } else {
      var welcomeMsg = "Welcome to Toastr!";
    }
    // console.log(user.displayName);
    this.setState({
      welcome: welcomeMsg,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  logout = () => {
    firebase.auth().signOut();
    console.log("logout called");
  }

  render() {
    const standardActions = (
      <Login/>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Twitter Login"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            Insert stuff here
          </Dialog>
          <h1>Toastr</h1>
          <h3>Social Media Manager</h3>
          <Login personalize={this.personalize.bind(this)}/>
          <br/>
          <button onClick={this.personalize}>personalize</button>
					<p />
					<div>
       
          <Route exact path="/" render={() => (
            <h1>{this.state.welcome}</h1>
          )}/>
          <Route path="/tweet" component={Tweet}/>
          <Route path="/email-login" component={EmailLogin } personalize={this.personalize.bind(this)}/>
          <Link to={"/email-login"}>
          <RaisedButton secondary={true}>Email Login</RaisedButton>
          </Link>
          <Link to={"/tweet"}>
              <RaisedButton secondary={true}>Tweet</RaisedButton>
          </Link>
          <Link to={"/"}>
          <RaisedButton secondary={true}>Home</RaisedButton>
          </Link>
            <br/>
            <RaisedButton backgroundColor={red700} onClick={this.logout}>logout</RaisedButton>
            <br/>
						More coming soon™
					</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

/* 
<FlatButton
label="Ok"
primary={true}
onTouchTap={this.handleRequestClose}
/> */
/* 
<RaisedButton
label="Login with Twitter"
secondary={true}
onTouchTap={this.handleTouchTap}
/> */
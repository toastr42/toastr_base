/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {blue300} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { TwitterLogin } from "react-twitter-auth";

import Tweet from "./Tweet";
import EmailLogin from "./components/EmailLogin";
import Login from "./components/Login";


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
    };
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
          <Login/>
       
					<p />
					<div>
       
          <Route exact path="/" render={() => (
            <h1>Home Page</h1>
          )}/>
          <Route path="/tweet" component={Tweet}/>
          <Route path="/email-login" component={EmailLogin}/>
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
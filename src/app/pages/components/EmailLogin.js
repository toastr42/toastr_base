import React from "react";
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyCJhlG41Yk_si3ah4c2M1JhPudlhoXM5q4",
    authDomain: "toastr-429e1.firebaseapp.com",
    databaseURL: "https://toastr-429e1.firebaseio.com",
    projectId: "toastr-429e1",
    storageBucket: "toastr-429e1.appspot.com",
    messagingSenderId: "224130504877"
  };
  
  const firebaseApp = firebase.initializeApp(config);
  const auth = firebaseApp.auth();

/* var provider = new firebase.auth.TwitterAuthProvider();
 */

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log("not logged in");
    }
});

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
        this.btnLogin = this.btnLogin.bind(this);
        this.btnLogout = this.btnLogout.bind(this);
        this.btnSignup = this.btnSignup.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }   
    
    btnLogin(e) {
        console.log(this.state);
        const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(e =>console.log(e.message));
       /*  firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                consolle.log(firebaseUSer);
            } else {
                console.log("not logged in");
            }
        }); */
    }

/*     authListener() */

    btnSignup(e) {
        console.log("signup");
        const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(e =>console.log(e.message));
      /*   firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                consolle.log(firebaseUSer);
            } else {
                console.log("not logged in");
            }
        }); */
    }

    btnLogout(e) {
        firebase.auth().signOut();
        console.log("logout called");
    }

    handleEmailChange(e) {
        const email = e.target.value;
        this.setState({
            email: email,
        })

    }

    handlePassChange(e) {
        const pass = e.target.value;
        this.setState({
            password: pass,
        })

    }

    render() {
    return (
        <div>
            <input placeholder={"email"} onChange={this.handleEmailChange}/>
            <br/>
            <input placeholder={"password"} onChange={this.handlePassChange}/>
            <br/>
            <button onClick={this.btnSignup}>Signup</button>
            <button onClick={this.btnLogin}>Login</button>
            <button onClick={this.btnLogout}>Logout</button>
      
         </div>
    );
  }
}
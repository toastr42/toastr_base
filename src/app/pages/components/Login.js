import React, {Component} from "react";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js"


export default class login extends Component {

    constructor () {
        super();

        this.onFailed = this.onFailed.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }


  onSuccess(response) {
    response.json().then(body => {
      alert(JSON.stringify(body));
    });
  }

  onFailed(error) {
    console.log("here");
    alert(error);
  
  }

  render() {
    return (
      <div>
        <TwitterLogin loginUrl="http://localhost:3000/api/v1/auth/twitter"
                      onFailure={this.onFailed}
                      onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse"
                      showIcon={true}/>
      </div>
    );
  }
} 
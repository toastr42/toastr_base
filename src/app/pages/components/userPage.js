import React from "react";

export default class UserPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hidden: true,
        }
    }

render() {
    
    return (
      <div>
        <p>Welcome To Your Toastr {this.props.name}!</p>
        <p>email: {this.props.email}</p>
        <p>username: ???</p>
        
      </div>
    );
  }
}
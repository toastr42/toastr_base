import React from "react";
import firebase from "firebase";
import $ from "jquery";

export default class TweetList extends React.Component {
constructor(props) {
    super(props);
}

showTweets = () => {
    var self = this;
    var user = firebase.auth().currentUser;
    console.log("current user ",user);
    $.get("https://api.twitter.com/1.1/statuses/home_timeline.json", {}, function(data) {
        console.log(data);
    });
    /* $.ajax({
        type: 'GET',
        data: {},
        url: 'https://api.twitter.com/1.1/statuses/home_timeline.json?',
        success: function(data) {
            console.log(data);
        }
    }); */
}

render() {

/*     console.log(this.props.list); */
 /*    const tweetList = data.map(name => {
        console.log(name);
    }) */
  /*   const listTweets = this.props.list.map(this.props.list); */
    return (
      <div>
          <button onClick={this.showTweets}>show tweets</button>
      </div>
    );
  }
}
/* 
<ul>
<li>{this.props.list}</li>
</ul> */
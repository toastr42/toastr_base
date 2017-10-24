import React from "react";

export default class TweetList extends React.Component {


render() {

/*     console.log(this.props.list); */
 /*    const tweetList = data.map(name => {
        console.log(name);
    }) */
  /*   const listTweets = this.props.list.map(this.props.list); */
    return (
      <div>
        {this.props.list}
      </div>
    );
  }
}
/* 
<ul>
<li>{this.props.list}</li>
</ul> */
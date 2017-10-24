import React from "react";
import TweetList from "./TweetList";
import { BrowserRouter, Link, Route } from "react-router-dom";
/* import Twitter from "twitter";
 */

export default class Twit extends React.Component {
    constructor() {
        super();
        this.state = {
          tweet: "",
          isToggled: false,
          list: [""],

        };
        this.handleClick = this.handleClick.bind(this);
      }

      setTweet(tweet) {
          this.setState({tweet});
      }
  handleChange(e) {
    const tweet = e.target.value;
    this.setTweet(tweet);
/*     console.log(this.state.tweet); */
  }
  sendTweet(twit) {
    console.log("sendTweet called");      
  }

  handleClick() {
    this.sendTweet(this.state.tweet);
    
/*     this.state.list[this.state.listIndex].id = this.state.listIndex;    */ 
    this.state.list.push(this.state.tweet);

   /*  var i = 0;
    for (i = 0; i < this.state.listIndex; i++) {
      console.log(this.state.list[i]); 
    } */

    this.setState(prevState => ({
        tweet: "",
         isToggled: !prevState.isToggled,
     }));
     
  }
  

  render() {
    return (
      <div>
        <input id={"Input"} placeholder={"Tweet"} value={this.state.tweet} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick}>Submit</button>
        <p>Tweets</p>
        <TweetList list={this.state.list}/>
      </div>
    );
  }
}

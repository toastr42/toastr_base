import React from "react";


/* import Twitter from "twitter";
 */
export default class Twit extends React.Component {
    constructor() {
        super();
        this.state = {
          tweet: "",
          isToggled: false,
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
    console.log(twit);      
  }

  handleClick() {
    this.sendTweet(this.state.tweet);

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
      </div>
    );
  }
}

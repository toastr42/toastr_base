// component that handles a basic facebook api call such as posting to your home page

import React, {Component} from "react";
import firebase from "firebase";
import RaisedButton from 'material-ui/RaisedButton';
import {blue300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

export default class facebookPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: "",
        }
    }
}
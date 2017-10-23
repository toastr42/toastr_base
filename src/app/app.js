import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import Tweet from './Tweet';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Main}></IndexRoute>
        <Route path="tweet" name="tweet" component={Tweet}></Route>
    </Route>  
</Router>, document.getElementById('app'));

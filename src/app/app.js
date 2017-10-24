import React from 'react';
import reactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './pages/Main'; // Our custom react component
/* import Tweet from './pages/Tweet'; */
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
reactDOM.render( <BrowserRouter>
    <Main/>
</BrowserRouter>, document.getElementById('app'));

/* <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Main}></IndexRoute>
        <Route path="tweet" name="tweet" component={Tweet}></Route>
    </Route>  
</Router> */
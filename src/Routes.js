import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <Route exact path="/" component={Home} />
            </Router>
        );
    }
}
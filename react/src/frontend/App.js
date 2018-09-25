import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

/** History */
import history from '../History';

/** Pages */
import Home from './pages/Home';
import Product from './pages/Product';
import News from './pages/News';


class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {

    } 

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home }/> )} />
                    <Route path="/product" component={Product }/> )} />
                    <Route path="/news" component={News }/> )} />
                </Switch>
            </Router>
        )
    }
}

export default (App);
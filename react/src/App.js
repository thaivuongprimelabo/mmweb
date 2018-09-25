import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

/** Backend Pages */
import * as AdminRoutes from './backend/constants/routes';
import Login from './backend/pages/Login';
import Register from './backend/pages/Register';
import Dashboard from './backend/pages/Dashboard';

/** Frontend Pages */
import Home from './frontend/pages/Home';

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
            <div>
            <Router basename={ AdminRoutes.ROUTE_ADMIN }>
                <Switch>
                    <Route exact path="/" render={() => ( <Redirect to={ AdminRoutes.ROUTE_DASHBOARD } /> )} /> 
                    <Route path={ AdminRoutes.ROUTE_LOGIN } component={Login } />
                    <Route path={ AdminRoutes.ROUTE_REGISTER } component={Register } />
                    <Route path={ AdminRoutes.ROUTE_DASHBOARD } component={Dashboard} />
                </Switch>
            </Router>

            <Router basename="/">
                <Switch>
                    <Route exact path="/" render={() => ( <Redirect to="/home" /> )} />
                    <Route path="/home" component={Home } />
                </Switch>
            </Router>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
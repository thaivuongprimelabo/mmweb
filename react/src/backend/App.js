import React, {Component} from 'react';
import NoMatch from './components/NoMatch';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link, withRouter  } from 'react-router-dom';

/** Backend Pages */
import * as AdminRoutes from './constants/routes';
import Admin from './pages/Admin';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        
        return (
            <Router basename={ AdminRoutes.ROUTE_ADMIN }>
                <Switch>
                    <Route path="/" component={Admin} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as AdminRoutes from '../constants/routes';
import ActionForm from './forms/ActionForm';
import ActionList from './lists/ActionList';

class Actions extends Component {

    render() {

        return (
            <div>
              <Switch>
                <Route exact path={ AdminRoutes.ROUTE_ACTION } component={ActionList} />
                <Route path={ AdminRoutes.ROUTE_ACTION_ADD } component={ActionForm} />
              </Switch>
            </div>
          )
    }
}

export default Actions;
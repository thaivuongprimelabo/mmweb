import React,  { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import * as AdminRoutes from '../constants/routes';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Actions from './Actions';
import Main from '../layouts/Main';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path={ AdminRoutes.ROUTE_LOGIN } component={Login} />
          <Route path={ AdminRoutes.ROUTE_REGISTER } component={Register} />
          <Route path={ AdminRoutes.ROUTE_DASHBOARD } component={Dashboard} />
          <Route path={ AdminRoutes.ROUTE_MAIN} component={Main} />
          <Route path={ AdminRoutes.ROUTE_ACTION} component={Actions} />
        </Switch>
      </div>
    )
  }
}
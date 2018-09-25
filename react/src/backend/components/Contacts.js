import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import MainContacts from './MainContacts';

export default class Contacts extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        Contacts
        <Switch>
          <Route exact path="/" component={MainContacts} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}
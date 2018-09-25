import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import history from '../History';

export default class MainContacts extends React.Component {

  _about = () => {
    this.props.history.push('/about')
}

  render() {
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        MainContacts
        <li><button onClick={this._about}>Aboutttttttt</button></li>
        <li><Link to="/about">CCCC</Link></li>
      </div>
    )
  }
}
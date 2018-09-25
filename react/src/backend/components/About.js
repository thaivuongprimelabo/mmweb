import React, { Component } from 'react';
import history from '../History';

export default class About extends Component {
    render() {
        console.log("About", history.location);
        return (
          <div style={{border: '1px solid black', padding: '10px'}}>
            About
          </div>
        )
      }
}
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {

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
                <h1>Frontend - Homepage</h1>
                <ul>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </div>
        )
    }
}

export default (Home);
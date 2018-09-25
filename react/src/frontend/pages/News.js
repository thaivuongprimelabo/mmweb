import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class News extends Component {

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
                <h1>News</h1>
                <ul>
                    <li><Link to="/news/u23-viet-nam">U23 Việt Nam</Link></li>
                    <li><Link to="/news/thanh-pho-ho-chi-minh">TP.HCM</Link></li>
                </ul>
            </div>
        )
    }
}

export default (News);
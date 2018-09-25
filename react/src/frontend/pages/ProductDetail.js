import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {

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
                <h1>{ this.props.match.params.name }</h1>
                <ul>
                    <li>Price: 20.000.000</li>
                </ul>
            </div>
        )
    }
}

export default (ProductDetail);
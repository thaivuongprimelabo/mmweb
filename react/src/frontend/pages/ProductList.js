import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductList extends Component {

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
                <ul>
                    <li><Link to="/product/iphone-6">Iphone 6</Link></li>
                    <li><Link to="/product/iphone-x">Iphone X</Link></li>
                </ul>
            </div>
        )
    }
}

export default (ProductList);
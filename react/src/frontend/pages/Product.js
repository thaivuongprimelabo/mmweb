import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
class Product extends Component {

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
                <h1>Product</h1>
                <Switch>
                    <Route exact path="/product/" component={ProductList} />
                    <Route path="/product/:name" component={ProductDetail} />
                </Switch>
            </div>
        )
    }
}

export default (Product);
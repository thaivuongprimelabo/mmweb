import React, { Component } from 'react'

import Spinner from '../commons/Spinner';
import List from './components/List';
import Modal from './components/Modal';
import * as Actions from '../redux/actions/index';
import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadTextFromApi();
        this.props.loadTypesFromApi();
    }

    componentWillReceiveProps(nextProps) {

    } 

    componentDidMount() {
    }

    render() {

        var { text } = this.props;
        var html = <Spinner />;
        if(Object.keys(text).length !== 0) {
            html =  <div>
                        <section className="content-header">
                            <h1>{ text.SIDEBAR.CATE_LIST }</h1>
                            <ol className="breadcrumb">
                                <li><a href="#"><i className="fa fa-dashboard"></i>Home</a></li>
                                <li className="active">{ text.SIDEBAR.CATE_LIST }</li>
                            </ol>
                            </section>
                            
                            <section className="content container-fluid">
                            
                                <div className="row">
                                    <div className="box">
                                        <div className="box-body">
                                            <form role="form">
                                                <a href="#" className="btn btn-primary btn-flat"  data-toggle="modal" data-target="#myModal">{ text.BUTTON.REGISTER }</a>
                                            </form>
                                        </div>
                                    </div>
                                        
                                    <div id="logBox" className="box">
                                        <List />
                                    </div>
                                </div>
                            </section>
                            <Modal />
                    </div>
        }
        return (
            <div>{ html }</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text : state.text
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadTextFromApi : () => {
            dispatch(Actions.loadTextFromApi());
        },
        loadTypesFromApi: () => {
            dispatch(Actions.loadTypesFromApi());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
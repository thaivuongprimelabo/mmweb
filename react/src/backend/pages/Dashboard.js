import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** History */
import history from '../../History';

import { connect } from 'react-redux';

/** Pages */
import Main from '../layouts/Main';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        var { auth } = nextProps;
        if(this.props.auth !== auth) {
            var keys = Object.keys(auth.userInfo);
            /** Log out */
            if(!keys.length) {
                this.props.history.goBack();
            }
        }
    } 

    componentDidMount() {
    }

    render() {
        return (
            <Main>
                <section className="content-header">
                    <h1>
                        Actions page
                        <small>it all starts here</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li className="active">Blank page</li>
                    </ol>
                </section>

                <section className="content">
                    <div className="box">
                        <div className="box-header with-border">
                        <h3 className="box-title">Title</h3>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                    title="Collapse">
                            <i className="fa fa-minus"></i></button>
                            <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                            <i className="fa fa-times"></i></button>
                        </div>
                        </div>
                        <div className="box-body">
                        Start creating your amazing application!
                        </div>
                        <div className="box-footer">
                        Footer
                        </div>
                    </div>
                </section>
                
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
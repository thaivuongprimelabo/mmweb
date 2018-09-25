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

    } 

    componentDidMount() {
        // actions.test()
    }

    render() {
        console.log(history.location);
        return (
            <Main>
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
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
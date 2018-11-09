import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Constants from '../constants/commons';
import * as Types from '../redux/actions/actionTypes';
import * as AdminRoutes from '../constants/routes';

/** Assets */
import '../assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../assets/admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../assets/admin/bower_components/Ionicons/css/ionicons.min.css';
import '../assets/admin/dist/css/AdminLTE.min.css';
import '../assets/admin/plugins/iCheck/square/blue.css';
import '../assets/admin/dist/css/skins/_all-skins.min.css';
import '../assets/admin/css/custom.css';

import '../assets/admin/bower_components/jquery/dist/jquery.min.js';
import '../assets/admin/bower_components/bootstrap/dist/js/bootstrap.min.js';
import '../assets/admin/plugins/iCheck/icheck.min.js';
import '../assets/admin/bower_components/jquery-slimscroll/jquery.slimscroll.min.js';
import '../assets/admin/bower_components/fastclick/lib/fastclick.js';
import '../assets/admin/dist/js/adminlte.js';
import '../assets/admin/dist/js/demo.js';

import Header from '../components/commons/Header';
import Sidebar from '../components/commons/Sidebar';
import Footer from '../components/commons/Footer';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        var { auth } = nextProps;
        if(this.props.auth !== auth) {
            if(auth.loginStatus === Types.SIGN_OUT) {
                window.location = Constants.BACKEND + AdminRoutes.ROUTE_LOGIN;
            }
        }
    } 

    componentDidMount() {
        document.body.className="hold-transition skin-blue sidebar-mini";
    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Blank page
                            <small>it all starts here</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="#">Examples</a></li>
                            <li className="active">Blank page</li>
                        </ol>
                    </section>

                    <section className="content">
                        { this.props.children }
                    </section>
                </div>
                
                <Footer />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
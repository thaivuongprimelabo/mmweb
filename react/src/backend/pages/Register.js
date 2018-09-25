import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import * as Constants from '../constants/commons';
import * as AdminRoutes from '../constants/routes';
import screen from '../constants/screen';

/** Assets */
import '../assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../assets/admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../assets/admin/bower_components/Ionicons/css/ionicons.min.css';
import '../assets/admin/dist/css/AdminLTE.min.css';
import '../assets/admin/plugins/iCheck/square/blue.css';
import '../assets/admin/css/custom.css';

import '../assets/admin/bower_components/jquery/dist/jquery.min.js';
import '../assets/admin/bower_components/bootstrap/dist/js/bootstrap.min.js';
import '../assets/admin/plugins/iCheck/icheck.min.js';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {

    } 

    componentDidMount() {

        document.body.className="hold-transition login-page";
        
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' /* optional */
        });
    }

    render() {
        
        var { language } = this.props;

        return (
            <div className="register-box">
                <div className="register-logo">
                    <a href="#"><b>{ screen.CMS_NAME }</b> { screen.CMS_NAME2 }</a>
                </div>

                <div className="register-box-body">
                    <p className="login-box-msg">{ screen[language].SCREEN.REG_ACC }</p>

                    <form action="../../index.html" method="post">
                    <div className="form-group has-feedback">
                        <input type="text" className="form-control" placeholder={ screen[language].SCREEN.FULLNAME } />
                        <span className="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="email" className="form-control" placeholder={ screen[language].SCREEN.EMAIL } />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder={ screen[language].SCREEN.PASSWORD } />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder={ screen[language].SCREEN.CONFIRM_PW } />
                        <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                        </div>
                    </div>
                    </form>

                    <div className="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> { screen[language].SCREEN.REG_FB }</a>
                    <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> { screen[language].SCREEN.REG_GG }</a>
                    </div>

                    <Link to={ AdminRoutes.ROUTE_LOGIN } className="text-center">{ screen[language].SCREEN.LOGIN_TITLE }</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language : state.language
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import * as Constants from '../constants/commons';
import * as AdminRoutes from '../constants/routes';
import * as Types from '../redux/actions/actionTypes';
import screen from '../constants/screen';
import messages from '../constants/messages';
import utils from '../helpers/utils';
import { register } from '../redux/actions/index';

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

        this.state = {
            name : '',
            email : '',
            password : '',
            confPassword: ''
        }
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        var { auth } = nextProps;
        console.log(auth);
        if(this.props.auth !== auth) {
            if(auth.loginStatus === Types.REGISTER_SUCCEED) {
                window.location = Constants.BACKEND + AdminRoutes.ROUTE_DASHBOARD;
            }
        }
    } 

    componentDidMount() {

        var { language } = this.props;
        var messagesLocale = messages[language];

        document.body.className="hold-transition login-page";
        
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' /* optional */
        });

        $.validator.addMethod("passwordcheck", function (value, element) {
            if (value != '') {
                return /^[A-Za-z0-9\d=!"#¥$%&'()*+,-./:;<=>?@\[\]\^_`{}|~]*$/.test(value) // consists of only these
                    && /[a-z]/.test(value) // has a lowercase letter
                    && /[A-Z]/.test(value) // has a uppercase letter
                    && /\d/.test(value) // has a digit
                    && /[!"#¥$%&'()*+,-./:;<=>?@\[\]\^_`{}|~]/.test(value) 
            } else {
                return true;
            }
        });

        // Validate
        $('#frmForm').validate({
            errorClass: 'error-txt',
            errorElement : 'span',
            rules : {
                name: {
                    required: true,
                },
                email : { 
                    required: true,
                    email: true
                },
                password : { 
                    required: true,
                    rangelength:[6,20],
                    passwordcheck : true
                },
                confPassword : { 
                    required: true,
                    rangelength:[6,20],
                    passwordcheck : true,
                    equalTo: '#password'
                }
            },
            messages : {
                name: {
                    required : messagesLocale.MSG_REQUIRED
                },
                email : {
                    required : messagesLocale.MSG_REQUIRED,
                    email : messagesLocale.MSG_VALID_EMAIL
                },
                password : {
                    required : messagesLocale.MSG_REQUIRED,
                    rangelength: utils.replaceErrMsg([6, 20], messagesLocale.MSG_RANGE_LENGTH),
                    passwordcheck : messagesLocale.MSG_PASSWORD_CHECK
                },
                confPassword : { 
                    required : messagesLocale.MSG_REQUIRED,
                    rangelength: utils.replaceErrMsg([6, 20], messagesLocale.MSG_RANGE_LENGTH),
                    passwordcheck : messagesLocale.MSG_PASSWORD_CHECK,
                    equalTo: messagesLocale.MSG_PASSWORD_CONF
                }
            }
        });
    }

    _doRegister = () => {
        if($('#frmForm').valid()) {
            this.props.doRegister(this.state);
        }
    }

    render() {
        
        var { language } = this.props;
        var screenLocale = screen[language];

        return (
            <div className="register-box">
                <div className="register-logo">
                    <a href="#"><b>{ screen.CMS_NAME }</b> { screen.CMS_NAME2 }</a>
                </div>

                <div className="register-box-body">
                    <p className="login-box-msg">{ screenLocale.SCREEN.REG_ACC }</p>

                    <form id="frmForm" method="post">
                    <div className="form-group has-feedback">
                        <input type="text" name="name" className="form-control" value={ this.state.name } onChange={(event) => this.setState({ name: event.target.value })} placeholder={ screenLocale.SCREEN.FULLNAME } />
                        <span className="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="email" name="email" className="form-control" value={ this.state.email } onChange={(event) => this.setState({ email: event.target.value })} placeholder={ screenLocale.SCREEN.EMAIL } />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" name="password" id="password" className="form-control" value={ this.state.password } onChange={(event) => this.setState({ password: event.target.value })} placeholder={ screenLocale.SCREEN.PASSWORD } />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" name="confPassword" className="form-control" value={ this.state.confPassword } onChange={(event) => this.setState({ confPassword: event.target.value })} placeholder={ screenLocale.SCREEN.CONFIRM_PW } />
                        <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <button type="button" className="btn btn-primary btn-block btn-flat" onClick={ this._doRegister }>{ screenLocale.BUTTON.REGISTER }</button>
                        </div>
                    </div>
                    </form>

                    <div className="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> { screenLocale.SCREEN.REG_FB }</a>
                    <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> { screenLocale.SCREEN.REG_GG }</a>
                    </div>

                    <Link to={ AdminRoutes.ROUTE_LOGIN } className="text-center">{ screenLocale.SCREEN.LOGIN_TITLE }</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language : state.language,
        auth : state.auth
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        doRegister: (form) => {
            dispatch(register(form));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
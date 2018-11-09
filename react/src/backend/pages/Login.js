import React, { Component } from 'react'
import { Link, NavLink, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';

/** Constants */
import * as Constants from '../constants/commons';
import * as AdminRoutes from '../constants/routes';
import * as Types from '../redux/actions/actionTypes';
import screen from '../constants/screen';
import messages from '../constants/messages';
import utils from '../helpers/utils';
import { login } from '../redux/actions/index';

/** History */
import history from '../../History';

/** Assets */
import '../assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../assets/admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../assets/admin/bower_components/Ionicons/css/ionicons.min.css';
import '../assets/admin/dist/css/AdminLTE.min.css';
import '../assets/admin/plugins/iCheck/square/blue.css';
import '../assets/admin/dist/css/style.css';

import '../assets/admin/bower_components/jquery/dist/jquery.min.js';
import '../assets/admin/bower_components/bootstrap/dist/js/bootstrap.min.js';
import '../assets/admin/plugins/iCheck/icheck.min.js';
import '../assets/admin/js/jquery.validate.js';

/** Components */
import ModalAlert from '../components/ModalAlert';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : '',
        }
    }

    componentWillReceiveProps(nextProps) {
        var { auth } = nextProps;
        if(this.props.auth !== auth) {
            if(auth.loginStatus === Types.LOGIN_SUCCEED) {
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
                email : { 
                    required: true, 
                    email: true
                },
                password : { 
                    required: true,
                    rangelength:[6,20],
                    passwordcheck : true
                }
            },
            messages : {
                email : {
                    required : messagesLocale.MSG_REQUIRED,
                    email : messagesLocale.MSG_VALID_EMAIL
                },
                password : {
                    required : messagesLocale.MSG_REQUIRED,
                    rangelength: utils.replaceErrMsg([6, 20], messagesLocale.MSG_RANGE_LENGTH),
                    passwordcheck : messagesLocale.MSG_PASSWORD_CHECK
                }
            }
        });
    }

    _doSignin = () => {
        if($('#frmForm').valid()) {
            this.props.doLogin(this.state);
        }
        
    }

    render() {
        var { language } = this.props;
        var screenLocale = screen[language];

        return (
            <div>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="#"><b>{ screen.CMS_NAME }</b> { screen.CMS_NAME2 }</a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">{ screenLocale.SCREEN.LOGIN_TITLE }</p>

                        <form id="frmForm" method="post" >
                            <div className="form-group has-feedback">
                                <input type="text" name="email" className="form-control" value={ this.state.email } onChange={(event) => this.setState({ email: event.target.value })} placeholder={ screenLocale.SCREEN.EMAIL } />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" name="password" className="form-control" value={ this.state.password }  onChange={(event) => this.setState({ password: event.target.value })} placeholder={ screenLocale.SCREEN.PASSWORD } />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                            <input type="checkbox" /> { screenLocale.SCREEN.REMEMBER_ME }
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <button type="button" className="btn btn-primary btn-block btn-flat" onClick={ this._doSignin }>{ screenLocale.BUTTON.LOGIN }</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> { screenLocale.SCREEN.LOGIN_FB }</a>
                            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> { screenLocale.SCREEN.LOGIN_GG }</a>
                        </div>

                        <Link to={AdminRoutes.ROUTE_FORGOT_PASSWORD} className="text-center">{ screenLocale.SCREEN.FORGOT_PW }</Link><br/>
                        <Link to={AdminRoutes.ROUTE_REGISTER} className="text-center">{ screenLocale.SCREEN.REG_ACC }</Link>

                    </div>
                </div>
                <ModalAlert />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text : state.text,
        language : state.language,
        auth : state.auth
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        doLogin : (form) => {
            dispatch(login(form));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
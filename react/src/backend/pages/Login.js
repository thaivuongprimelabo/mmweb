import React, { Component } from 'react'
import { Link, NavLink, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';

/** Constants */
import * as Constants from '../constants/commons';
import * as AdminRoutes from '../constants/routes';
import screen from '../constants/screen';
import messages from '../constants/messages';
import utils from '../helpers/utils';
import { login } from '../redux/actions/index';

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

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {

    } 

    componentDidMount() {

        var { language } = this.props;
        
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
                    required : messages[language].MSG_REQUIRED,
                    email : messages[language].MSG_VALID_EMAIL
                },
                password : {
                    required : messages[language].MSG_REQUIRED,
                    rangelength: utils.replaceErrMsg([6, 20], messages[language].MSG_RANGE_LENGTH),
                    passwordcheck : messages[language].MSG_PASSWORD_CHECK
                }
            }
        });
    }

    _doSignin = () => {
        if($('#frmForm').valid()) {
            //this.props.history.push(AdminRoutes.ROUTE_DASHBOARD);
            this.props.doLogin(this.state);
        }
        
    }

    render() {
        var { language } = this.props;

        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>{ screen.CMS_NAME }</b> { screen.CMS_NAME2 }</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">{ screen[language].SCREEN.LOGIN_TITLE }</p>

                    <form id="frmForm" method="post" >
                        <div className="form-group has-feedback">
                            <input type="text" name="email" className="form-control" value={ this.state.email } onChange={(event) => this.setState({ email: event.target.value })} placeholder={ screen[language].SCREEN.EMAIL } />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" name="password" className="form-control" value={ this.state.password }  onChange={(event) => this.setState({ password: event.target.value })} placeholder={ screen[language].SCREEN.PASSWORD } />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox" /> { screen[language].SCREEN.REMEMBER_ME }
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="button" className="btn btn-primary btn-block btn-flat" onClick={ this._doSignin }>{ screen[language].BUTTON.LOGIN }</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> { screen[language].SCREEN.LOGIN_FB }</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> { screen[language].SCREEN.LOGIN_GG }</a>
                    </div>

                    <Link to={AdminRoutes.ROUTE_FORGOT_PASSWORD} className="text-center">{ screen[language].SCREEN.FORGOT_PW }</Link><br/>
                    <Link to={AdminRoutes.ROUTE_REGISTER} className="text-center">{ screen[language].SCREEN.REG_ACC }</Link>

                </div>
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
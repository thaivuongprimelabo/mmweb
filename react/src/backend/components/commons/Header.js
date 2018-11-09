import React, { Component } from 'react'
import { connect } from 'react-redux';
import screen from '../../constants/screen';

import * as AdminRoutes from '../../constants/routes';

/** Image */
import UserIcon from '../../assets/admin/dist/img/user2-160x160.jpg';

/** Action */
import { signout } from '../../redux/actions/index';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        var { auth } = nextProps;
    } 

    componentDidMount() {
    }

    _signout = () => {
        this.props.signout();
    }

    render() {
        var { auth, language } = this.props;

        var userInfo = auth.userInfo;
        var screenLocale = screen[language];

        return (
            <header className="main-header">

                <a href="index2.html" className="logo">
                    <span className="logo-mini">{screen.CMS_NAME}</span>
                    <span className="logo-lg"><b>{screen.CMS_NAME}</b>&nbsp;{screen.CMS_NAME2}</span>
                </a>

                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                        <li className="dropdown messages-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-envelope-o"></i>
                            <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu">
                            <li className="header">You have 4 messages</li>
                            <li>
                                <ul className="menu">
                                <li>
                                    <a href="#">
                                    <div className="pull-left">
                                        <img src={ UserIcon } className="img-circle" alt="User Image" />
                                    </div>
                                    <h4>
                                        Support Team
                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                    </h4>
                                    <p>Why not buy a new awesome theme?</p>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="footer"><a href="#">See All Messages</a></li>
                            </ul>
                        </li>
                        <li className="dropdown notifications-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-bell-o"></i>
                            <span className="label label-warning">10</span>
                            </a>
                            <ul className="dropdown-menu">
                            <li className="header">You have 10 notifications</li>
                            <li>
                                <ul className="menu">
                                <li>
                                    <a href="#">
                                    <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="footer"><a href="#">View all</a></li>
                            </ul>
                        </li>
                        <li className="dropdown tasks-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-flag-o"></i>
                            <span className="label label-danger">9</span>
                            </a>
                            <ul className="dropdown-menu">
                            <li className="header">You have 9 tasks</li>
                            <li>
                                <ul className="menu">
                                <li>
                                    <a href="#">
                                    <h3>
                                        Design some buttons
                                        <small className="pull-right">20%</small>
                                    </h3>
                                    <div className="progress xs">
                                        <div className="progress-bar progress-bar-aqua" style={{ width: '20%' }} role="progressbar"
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                        <span className="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="footer">
                                <a href="#">View all tasks</a>
                            </li>
                            </ul>
                        </li>
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src={ UserIcon } className="user-image" alt="User Image" />
                                <span className="hidden-xs">{ userInfo.name }</span>
                            </a>
                            <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src={ UserIcon } className="img-circle" alt="User Image" />

                                <p>
                                { userInfo.name }
                                </p>
                            </li>
                            
                            <li className="user-footer">
                                <div className="pull-left">
                                <a href="#" className="btn btn-default btn-flat">{ screenLocale.BUTTON.PROFILE }</a>
                                </div>
                                <div className="pull-right">
                                    <a href="javascript:void(0)" className="btn btn-default btn-flat" onClick={ this._signout }>{ screenLocale.BUTTON.SIGN_OUT }</a>
                                </div>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth,
        language : state.language
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signout : () => {
            dispatch(signout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
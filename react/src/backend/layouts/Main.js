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
        var { auth } = this.props;
        var keys = Object.keys(auth.userInfo);
        if(keys.length === 0) {
            window.location = Constants.BACKEND + AdminRoutes.ROUTE_LOGIN;
        }
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

        // Fix height
        var Selector = {
            wrapper       : '.wrapper',
            contentWrapper: '.content-wrapper',
            layoutBoxed   : '.layout-boxed',
            mainFooter    : '.main-footer',
            mainHeader    : '.main-header',
            sidebar       : '.sidebar',
            controlSidebar: '.control-sidebar',
            fixed         : '.fixed',
            sidebarMenu   : '.sidebar-menu',
            logo          : '.main-header .logo'
        };

        var ClassName = {
            fixed         : 'fixed',
            holdTransition: 'hold-transition'
        };
        
        var footerHeight  = $(Selector.mainFooter).outerHeight() || 0;
        var neg           = $(Selector.mainHeader).outerHeight() + footerHeight;
        var windowHeight  = $(window).height();
        var sidebarHeight = $(Selector.sidebar).height() || 0;

        // Set the min-height of the content and sidebar based on
        // the height of the document.
        if ($('body').hasClass(ClassName.fixed)) {
        $(Selector.contentWrapper).css('min-height', windowHeight - footerHeight);
        } else {
            var postSetHeight;

            if (windowHeight >= sidebarHeight) {
                $(Selector.contentWrapper).css('min-height', windowHeight - neg);
                postSetHeight = windowHeight - neg;
            } else {
                $(Selector.contentWrapper).css('min-height', sidebarHeight);
                postSetHeight = sidebarHeight;
            }

            // Fix for the control sidebar height
            var $controlSidebar = $(Selector.controlSidebar);
            if (typeof $controlSidebar !== 'undefined') {
                if ($controlSidebar.height() > postSetHeight)
                $(Selector.contentWrapper).css('min-height', $controlSidebar.height());
            }
        }

    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    { this.props.children }
                    
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
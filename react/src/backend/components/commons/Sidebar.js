import React, { Component } from 'react'
import { connect } from 'react-redux';
import screen from '../../constants/screen';
import UserIcon from '../../assets/admin/dist/img/user2-160x160.jpg';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {

    } 

    componentDidMount() {
    }

    render() {

        var { auth, language } = this.props;

        var screenLocale = screen[language];
        var userInfo = auth.userInfo;
        var keys = Object.keys(screenLocale.SIDEBAR);
        var sidebar = screenLocale.SIDEBAR;
        var listMenu = sidebar.map((item, index) => {
            return <SidebarItem key={index} item={ item } />
        });

        return (
            <aside className="main-sidebar">

                <section className="sidebar">

                <div className="user-panel">
                    <div className="pull-left image">
                    <img src={ UserIcon } className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                    <p>{ userInfo.name }</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> { screenLocale.SCREEN.ONLINE }</a>
                    </div>
                </div>

                <ul id="sidebar-menu" className="sidebar-menu" data-widget="tree">
                    { listMenu }
                </ul>
                </section>
            </aside>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
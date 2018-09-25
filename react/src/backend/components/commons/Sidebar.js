import React, { Component } from 'react'
import { connect } from 'react-redux';

import UserIcon from '../../assets/admin/dist/img/user2-160x160.jpg';

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
        return (
            <aside className="main-sidebar">

                <section className="sidebar">

                <div className="user-panel">
                    <div className="pull-left image">
                    <img src={ UserIcon } className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                    <p>Mr.A</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>

                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>

                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="treeview">
                    <a href="#">
                        <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="../../index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                        <li><a href="../../index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                    </ul>
                    </li>
                </ul>
                </section>
            </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
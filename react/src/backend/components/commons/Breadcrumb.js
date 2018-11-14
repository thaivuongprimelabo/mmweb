import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import screen from '../../constants/screen';
import * as AdminRoutes from '../../constants/routes';

class Breadcrumb extends Component {

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
        var { language } = this.props;
        var screenLocale = screen[language];
        var protocol = window.location.protocol;
        var host = window.location.host;
        var url = window.location.href;
        var uri = url.replace(host, '').replace(protocol, '').replace('//','').replace(AdminRoutes.ROUTE_ADMIN,'');
        var breadcrumb = screenLocale.SCREEN.BREADCRUMB;
        var dashboard = breadcrumb[AdminRoutes.ROUTE_DASHBOARD];
        var arrUri = uri.split('/');
        var segment = [];
        if(arrUri.length > 0) {
            var to = '';
            for(var i = 0; i < arrUri.length; i++) {
                if(arrUri[i].length) {
                    to += '/' + arrUri[i];
                    var name = breadcrumb[to];
                    var li = <li key={i}><Link to={to}>{name}</Link></li>;
                    if(i === (arrUri.length - 1)) {
                        li = <li key={i}>{name}</li>
                    }
                    segment.push(li);
                }
            }
        }
        var current = screenLocale.SCREEN.BREADCRUMB[segment];

        return (
            <ol className="breadcrumb">
                <li><Link to={AdminRoutes.ROUTE_DASHBOARD}><i className="fa fa-info-circle"></i> {dashboard}</Link></li>
                {segment}
            </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);
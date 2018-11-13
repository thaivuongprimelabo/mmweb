import React, { Component } from 'react';
import { connect } from 'react-redux';
import { paging } from '../../redux/actions/index';

class PageNumber extends Component {

    _goToPage = (page) => {
        if(page > 0) {
            this.props.doPaging(page);
        }
    }

    render() {
        var { pageNumber, label, prev, next, first, last, currentPage } = this.props;
        var active;
        if(currentPage === pageNumber) {
            active = 'active';
        }

        if(pageNumber < 0) {
            active = 'disabled';
        }

        var item = <a href="javascript:void(0)" onClick={ () => this._goToPage(pageNumber) }>{label}</a>;
        if(first !== undefined) {
            item = <a href="javascript:void(0)" onClick={ () => this._goToPage(pageNumber) }>&laquo;</a>;
        }

        if(prev !== undefined) {
            
            item = <a href="javascript:void(0)" onClick={ () => this._goToPage(pageNumber) }>&lt;</a>;
        }

        if(next !== undefined) {
            item = <a href="javascript:void(0)" onClick={ () => this._goToPage(pageNumber) }>&gt;</a>;
        }

        if(last !== undefined) {
            item = <a href="javascript:void(0)" onClick={ () => this._goToPage(pageNumber) }>&raquo;</a>;
        }
        return (
            <li className={active}>{ item }</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageNumber);
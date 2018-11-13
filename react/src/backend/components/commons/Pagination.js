import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageNumber from './PageNumber';
import * as Constants from '../../constants/commons';
import screen from '../../constants/screen';
import { paging, saveCurrentPage } from '../../redux/actions/index';
import * as Types from '../../redux/actions/actionTypes';
import * as AdminRoutes from '../../constants/routes';

class Pagination extends Component {

    constructor(props) {
        super(props);
    }

    _doPaging = (currentPage) => {
        var { page, pagingInfo } = this.props;

        var params = {
            type : Types.PAGING_ACTIONS,
            currentPage : currentPage,
            rowPerPage : pagingInfo.rowPerPage
        }

        switch(page) {
            case AdminRoutes.ROUTE_TYPE:
                params.type = Types.PAGING_TYPES;
                break;
            case AdminRoutes.ROUTE_LOCATION:
                params.type = Types.PAGING_LOCATIONS;
                break;
            case AdminRoutes.ROUTE_USER:
                params.type = Types.PAGING_USERS;
                break;
            default:
                break;
        }
        
        this.props.paging(params);
        this.props.saveCurrentPage(currentPage);
    }

    _renderPaging = () => {
        var { totalRecords } = this.props.pagingInfo;
        var { currentPage } = this.props;
        var rowPerPage = Constants.PAGE_LIMIT;
        var pageNumber = [];
        var totalPages = Math.floor(totalRecords / rowPerPage);
        if(totalPages === 0) {
            return pageNumber;
        }
        
        var prevPage = (currentPage - 1) > 0 ? (currentPage - 1) : -1;
        var nextPage = (currentPage + 1) <= totalPages ? (currentPage + 1) : -1 ;
        var firstPage = prevPage !== -1 ? 1 : -1;
        var lastPage = totalPages;
        pageNumber.push(<PageNumber pageNumber={firstPage} first={true} key={9999} doPaging={this._doPaging} />);
        pageNumber.push(<PageNumber pageNumber={prevPage} prev={true} key={9998} doPaging={this._doPaging}  />);

        var left = currentPage - 2;
        var right = currentPage + 2 + 1;
        var l;
        var tmp = [];
        for(var i = 1; i <= totalPages; i++) {
            var page = i;
            if(page <= 3 || page >= totalPages - 2 || page >= left && page < right) {
                tmp.push(page);
            }
        }
        
        var tmp2 = [];
        for(let i of tmp) {
            if(l) {
                if (i - l === 2) {
                    tmp2.push(l + 1);
                } else if (i - l !== 1) {
                    if(!tmp2.includes(-2)) {
                        tmp2.push(-2);
                    } else {
                        tmp2.push(-3);
                    }
                    
                }
            }
            tmp2.push(i);
            l = i;
        }

        for(let i of tmp2) {
            if(i < 0) {
                pageNumber.push(<PageNumber pageNumber={i} key={i} label={'...'} currentPage={currentPage}  />);
            } else {
                pageNumber.push(<PageNumber pageNumber={i} key={i} label={i} currentPage={currentPage} doPaging={this._doPaging}  />);
            }
        }
        pageNumber.push(<PageNumber pageNumber={nextPage} next={true} key={9997} doPaging={this._doPaging}  />);
        pageNumber.push(<PageNumber pageNumber={lastPage} last={true} key={9996} doPaging={this._doPaging}  />);

        return pageNumber;
    }

    render() {
        var { pagingInfo, language, currentPage } = this.props;
        var totalRecords = pagingInfo.totalRecords;
        var screenLocale = screen[language];
        var rowPerPage = Constants.PAGE_LIMIT;
        var to = totalRecords > rowPerPage ? (currentPage * rowPerPage) : totalRecords;
        var from = totalRecords > rowPerPage ? (to - rowPerPage) + 1 : 1;

        var pageNumber = this._renderPaging();

        var total = screenLocale.PAGINATION.TOTAL.replace('{0}', totalRecords);
        var fromTo = screenLocale.PAGINATION.FROM_TO.replace('{0}', from).replace('{1}', to);
        return (
            <div className="box-header">
                <p className="box-note"><span>{ fromTo }</span> <span>{ total }</span></p>
                
                <div id="paging-monitoring" className="box-tools">
                    <ul className="pagination pagination-sm no-margin pull-right">
                        { pageNumber }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text : state.text,
        types : state.types,
        language: state.language,
        currentPage : state.currentPage
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        paging : (params) => {
            dispatch(paging(params));
        },
        saveCurrentPage: (currentPage) => {
            dispatch(saveCurrentPage(currentPage));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
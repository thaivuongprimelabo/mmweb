import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageNumber from './PageNumber';
import * as Constants from '../constants/commons';

class Pagination extends Component {

    constructor(props) {
        super(props);

    }

    _renderPaging = () => {
        var { totalPages, currentPage } = this.props.pagingInfo;
        var pageNumber = [];
        
        var prevPage = (currentPage - 1) > 0 ? (currentPage - 1) : -1;
        var nextPage = (currentPage + 1) <= totalPages ? (currentPage + 1) : -1 ;
        var firstPage = prevPage !== -1 ? 1 : -1;
        var lastPage = nextPage !== -1 ? 1 : -1;
        pageNumber.push(<PageNumber pageNumber={firstPage} first={true} key={9999} />);
        pageNumber.push(<PageNumber pageNumber={prevPage} prev={true} key={9998}  />);

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
                pageNumber.push(<PageNumber pageNumber={i} key={i} label={i} currentPage={currentPage}  />);
            }
        }
        pageNumber.push(<PageNumber pageNumber={nextPage} next={true} key={9997}  />);
        pageNumber.push(<PageNumber pageNumber={lastPage} last={true} key={9996}  />);

        return pageNumber;
    }

    render() {
        var { text, pagingInfo } = this.props;

        var pageNumber = this._renderPaging();

        var total = text.PAGINATION.TOTAL.replace('{0}', pagingInfo.totalRecords);
        var fromTo = text.PAGINATION.FROM_TO.replace('{0}', pagingInfo.from).replace('{1}', pagingInfo.to);
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
        types : state.types
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Pagination from '../../components/commons/Pagination';
import ListItem from './ListItem';
import * as Constants from '../../constants/commons';

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            types : [],
            currentPage : 0
        }
    }

    componentDidMount() {
    }
    
    componentWillReceiveProps(nextProps) {
        var { currentPage } = nextProps;
        if(this.props.currentPage !== nextProps.currentPage) {
            this.setState({currentPage : currentPage});
        }

    }
    render() {
        var { text, types } = this.props;
        var { currentPage } = this.state;
        var pagingInfo = {totalRecords: 0, totalPages, currentPage: 0, from: 0, to: 0};
        var totalRecords = types.length;
        var pageLimit = Constants.PAGE_LIMIT;
        var totalPages = Math.ceil(totalRecords / pageLimit);
        currentPage = currentPage !== 0 ? currentPage : 1;
        var from = (currentPage - 1) * pageLimit;
        var to = (from + pageLimit) < totalRecords ? (from + pageLimit) : totalRecords;

        types = types.slice(from, to);

        // Update pagingInfo
        pagingInfo.totalRecords = totalRecords;
        pagingInfo.totalPages = totalPages;
        pagingInfo.from = from;
        pagingInfo.to = to;
        pagingInfo.currentPage = currentPage;

        var listItem;
        if(types.length > 0) {
            listItem = types.map((type, index) => {
                return <ListItem type={type} key={index} />
            });
        }
        return (
            <div>
                <Pagination text={text} pagingInfo={pagingInfo} />
                <div className="box-body table-responsive no-padding">
                    <table id="list" className="table table-bordered table-hover table-responsive">
                    <thead>
                        <tr className="btn-primary">
                            <th width="5%"  className="text-center">{ text.SCREEN.ID }</th>
                            <th width="25%">{ text.SCREEN.NAME }</th>
                            <th width="10%" className="text-center">{ text.SCREEN.ORDER }</th>
                            <th width="15%" className="text-center">{ text.SCREEN.SYNC }</th>
                            <th scope="col" className="text-right">{ text.SCREEN.CREATED_AT }</th>
                            <th scope="col" className="text-right">{ text.SCREEN.UPDATED_AT }</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className="table-striped">
                            { listItem }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text : state.text,
        types : state.types,
        currentPage : state.currentPage
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
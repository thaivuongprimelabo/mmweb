import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import screen from '../constants/screen';

/** History */
import history from '../../History';

import { connect } from 'react-redux';
import { loadActionsFromApi } from '../redux/actions/index';

/** Pages */
import Main from '../layouts/Main';
import Pagination from '../commons/Pagination';

class Actions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name_search : '',
            type_search : '',
            location_search : '',
            date_from_search : '',
            date_to_search : ''
        }
    }

    componentWillMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        var { actions, currentPage } = nextProps;
        if(this.props.actions !== actions) {
            
        }
    } 

    componentDidMount() {
        this.props.loadActions();
    }

    render() {

        var { language, actions } = this.props;
        var screenLocale = screen[language];
        var title = screenLocale.SCREEN.ACTIONS.LIST_TITLE;
        var columns = screenLocale.SCREEN.ACTIONS.COLUMNS;
        var actionItem = actions.data.map((item, index) => {
            return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.cost}</td>
                        <td>{item.location_name !== null ? item.location_name : item.latlong}</td>
                        <td>{item.created_at}</td>
                        <td>{item.type_name}</td>
                        <td>{item.is_sync === 1 ? screenLocale.SCREEN.IS_SYNC : screenLocale.SCREEN.NOT_SYNC }</td>
                    </tr>
        });
        return (
            <Main>
                <section className="content-header">
                    <h1>{ title }</h1>
                </section>
                <section className="content container-fluid">
                    <div className="box mb10">
                        <div className="box-body">
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Lọc theo tên</label>
                                    <input type="text" className="form-control"  value={ this.state.name_search } onChange={(event) => this.setState({ name_search: event.target.value })}  />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Lọc theo loại hoạt động</label>
                                    <select className="form-control" >

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Lọc theo vị trí</label>
                                    <select className="form-control">

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                <label>Từ ngày</label>
                                    <div id="datetimepicker-from" className="date">
                                        <input type="text" className="form-control" value={ this.state.date_from_search } onChange={(event) => this.setState({ date_from_search: event.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                <label>Đến ngày</label>
                                <div id="datetimepicker-to" className="date">
                                        <input type="text" className="form-control" value={ this.state.date_to_search } onChange={(event) => this.setState({ date_to_search: event.target.value })} />
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" id="search" className="btn btn-primary pull-right">{screenLocale.BUTTON.SEARCH}</button>
                            </div>
                        </div>
                    </div>
                    <div className="box no-margin">
                        <div className="box-body">
                            <table id="example1" className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>{columns.no}</th>
                                        <th>{columns.name}</th>
                                        <th>{columns.price}</th>
                                        <th>{columns.location}</th>
                                        <th>{columns.created_at}</th>
                                        <th>{columns.type}</th>
                                        <th>{columns.sync}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { actionItem }
                                </tbody>
                            </table>
                            
                        </div>
                        <div className="box-footer pd6 clearfix">
                            <Pagination pagingInfo={{rowPerPage: 10, totalRecords:278, currentPage: 1}} />
                        </div>
                    </div>

                </section>
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth,
        language : state.language,
        actions : state.actions,
        currentPage : state.currentPage
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadActions : () => {
            dispatch(loadActionsFromApi());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
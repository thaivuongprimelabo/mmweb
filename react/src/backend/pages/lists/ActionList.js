import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import screen from '../../constants/screen';
import utils from '../../helpers/utils';
import * as Constants from '../../constants/commons';
import * as Types from '../../redux/actions/actionTypes';

/** History */
import history from '../../../History';

import { connect } from 'react-redux';
import { loadActionsFromApi, loadTypesFromApi, loadLocationsFromApi, search } from '../../redux/actions/index';

/** Pages */
import Main from '../../layouts/Main';
import Pagination from '../../components/commons/Pagination';
import NoDataTable from '../../components/commons/NoDataTable';
import Breadcrumb from '../../components/commons/Breadcrumb';
import * as AdminRoutes from '../../constants/routes';

class ActionList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name_search : '',
            type_search : '',
            location_search : '',
            date_from_search : '',
            date_to_search : '',
            type : '',
            text : ''
        }
    }

    componentWillMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        var { actions } = nextProps;
        if(this.props.actions !== actions) {
            
        }
    } 

    componentDidMount() {
        this.props.loadActions();
        this.props.loadTypes();
        this.props.loadLocations();

        $('#datetimepicker-from').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: 'ja',
            toolbarPlacement: 'bottom',
            showTodayButton: false,
              showClear: false,
            ignoreReadonly: true,
            allowInputToggle: true,
            useCurrent : false,
        });
    
        $('#datetimepicker-to').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: 'ja',
            toolbarPlacement: 'bottom',
            showTodayButton: false,
              showClear: false,
            ignoreReadonly: true,
            allowInputToggle: true,
            useCurrent: false
        });
        $("#datetimepicker-from").on("dp.change", function (e) {
            $('#datetimepicker-to').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker-to").on("dp.change", function (e) {
            $('#datetimepicker-from').data("DateTimePicker").maxDate(e.date);
        });
    }

    _doCSV = () => {

    }

    _doBackup = () => {

    }

    _doRegister = () => {
        this.props.history.push(AdminRoutes.ROUTE_ACTION_ADD);
    }

    _doSearch = () => {
        var conditions = this.state;
        conditions.date_from_search = $('#datefrom').val();
        conditions.date_to_search = $('#dateto').val();
        conditions.type = Types.SEARCH_ACTIONS;
        this.props.search(conditions);
    }

    render() {

        var { language, actions, types, locations } = this.props;
        var screenLocale = screen[language];
        var title = screenLocale.SCREEN.ACTIONS.LIST_TITLE;
        var columns = screenLocale.SCREEN.ACTIONS.COLUMNS;
        var totalRecords = actions.data_search.length;
        var actionItem = <NoDataTable colSpan={7} />;
        if(actions.data_paging.length > 0) {
            actionItem = actions.data_paging.map((item, index) => {
                return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.cost}</td>
                            <td>{item.location_name !== null ? item.location_name : item.latlong}</td>
                            <td>{item.created_at}</td>
                            <td>{item.type_name}</td>
                            <td>{item.is_sync === Constants.IS_SYNC ? screenLocale.SCREEN.IS_SYNC : screenLocale.SCREEN.NOT_SYNC }</td>
                            <td align="center">
                                {item.is_sync === Constants.NOT_SYNC &&
                                    <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" style={{fontSize: '18px'}}></i></Link>
                                }
                            </td>
                        </tr>
            });
        }

        var typeOptions = types.data.map((item, index) => {
            return <option key={index} value={item.value}>{item.name}</option>
        });

        var locationOptions = locations.data.map((item, index) => {
            return <option key={index} value={item.id}>{item.name}</option>
        });

        return (
            <Main>
                <section className="content-header">
                    <h1>
                        { title }
                    </h1>
                    <Breadcrumb />
                </section>
                <section className="content container-fluid">
                    <div className="box mb10">
                        <div className="box-body">
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>{screenLocale.SCREEN.ACTIONS.SEARCH.NAME}</label>
                                    <input type="text" className="form-control"  value={ this.state.name_search } onChange={(event) => this.setState({ name_search: event.target.value })}  />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>{screenLocale.SCREEN.ACTIONS.SEARCH.TYPE}</label>
                                    <select className="form-control" onChange={(event) => this.setState({ type_search: event.target.value })}>
                                        <option value="">---</option>
                                        {typeOptions}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>{screenLocale.SCREEN.ACTIONS.SEARCH.LOCATION}</label>
                                    <select className="form-control" onChange={(event) => this.setState({ location_search: event.target.value })}>
                                        <option value="">---</option>
                                        {locationOptions}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                <label>{screenLocale.SCREEN.ACTIONS.SEARCH.DATE_FROM}</label>
                                    <div id="datetimepicker-from" className="date">
                                        <input type="text" className="form-control" name="datefrom" id="datefrom" value={ this.state.date_from_search } onChange={(event) => this.setState({ date_from_search: event.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="form-group">
                                <label>{screenLocale.SCREEN.ACTIONS.SEARCH.DATE_TO}</label>
                                <div id="datetimepicker-to" className="date">
                                        <input type="text" className="form-control" name="dateto" id="dateto" value={ this.state.date_to_search } onChange={(event) => this.setState({ date_to_search: event.target.value })} />
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" id="csv" className="btn btn-warning pull-left mr10" onClick={ this._doCSV }><i className="fa fa-file-excel-o" aria-hidden="true"></i> {screenLocale.BUTTON.CSV}</button>
                                <button type="submit" id="backup" className="btn btn-primary pull-left mr10" onClick={ this._doBackup }><i className="fa fa-database" aria-hidden="true"></i> {screenLocale.BUTTON.BACKUP}</button>
                                <button type="submit" id="backup" className="btn btn-primary pull-left" onClick={ this._doRegister }><i className="fa fa-plus" aria-hidden="true"></i> {screenLocale.BUTTON.REGISTER}</button>
                                <button type="submit" id="search" className="btn btn-primary pull-right" onClick={ this._doSearch }><i className="fa fa-search" aria-hidden="true"></i> {screenLocale.BUTTON.SEARCH}</button>
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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { actionItem }
                                </tbody>
                            </table>
                            
                        </div>
                        <div className="box-footer pd6 clearfix">
                            <Pagination page={AdminRoutes.ROUTE_ACTION} pagingInfo={{totalRecords:totalRecords}} />
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
        types : state.types,
        locations : state.locations,
        currentPage : state.currentPage
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadActions : () => {
            dispatch(loadActionsFromApi());
        },
        loadTypes : () => {
            dispatch(loadTypesFromApi());
        },
        loadLocations: () => {
            dispatch(loadLocationsFromApi());
        },
        search : (conditions) => {
            dispatch(search(conditions));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionList);
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import utils from '../helpers/utils';
import screen from '../constants/screen';
import { loadLocationsFromApi, loadTypesFromApi } from '../redux/actions/index';

class ActionFormItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.id,
            name : '',
            cost : '',
            created_at : utils.getCurrentDate('YYYY-MM-DD HH:II:SS'),
            updated_at : utils.getCurrentDate('YYYY-MM-DD HH:II:SS'),
            comment : '',
            location_id : '',
            type_id : '',
            is_sync : 0,
            is_deleted : 0
        }
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        this.props.loadLocations();
        this.props.loadTypes();
    }

    componentDidUpdate() {
        this.props.setFormData(this.state);
    }

    render() {
        var { language, types, locations } = this.props;
        
        var screenLocale = screen[language];

        var typeOptions = types.data.map((item, index) => {
            return <option key={index} value={item.value}>{item.name}</option>
        });

        var locationOptions = locations.data.map((item, index) => {
            return <option key={index} value={item.id}>{item.name}</option>
        });

        return (
            <div className="col-md-6">
                <div className="box box-primary">
                    <form role="form">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">{ screenLocale.SCREEN.NAME }</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.COST }</label>
                                <input type="text" className="form-control" value={this.state.cost} onChange={(event) => this.setState({ cost: event.target.value })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.CREATED_AT }</label>
                                <input type="text" className="form-control" value={this.state.created_at} onChange={(event) => this.setState({ created_at: event.target.value })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.COMMENT }</label>
                                <textarea className="form-control" rows="3" value={this.state.comment} onChange={(event) => this.setState({ comment: event.target.value })} >
                                    
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.LOCATION }</label>
                                <select className="form-control" onChange={(event) => this.setState({ location_id: event.target.value })}>
                                    <option value="">---</option>
                                    {locationOptions}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.TYPE }</label>
                                <select className="form-control" onChange={(event) => this.setState({ type_id: event.target.value })}>
                                    <option value="">---</option>
                                    {typeOptions}
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language : state.language,
        types : state.types,
        locations : state.locations
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadTypes : () => {
            dispatch(loadTypesFromApi());
        },
        loadLocations: () => {
            dispatch(loadLocationsFromApi());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionFormItem);
import React,  { Component }  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AdminRoutes from '../../constants/routes';
import screen from '../../constants/screen';
import Main from '../../layouts/Main';
import Breadcrumb from '../../components/commons/Breadcrumb';
import ActionFormItem from '../../components/ActionFormItem';

class ActionForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 2,
            form_data : []
        }
    }

    _addForm = () => {
        this.setState({
            count : this.state.count + 1
        });
    }

    _back = () => {
        this.props.history.push(AdminRoutes.ROUTE_ACTION);
    }

    _save = () => {
        console.log(this.state.form_data);
    }

    _setFormData = (form) => {
        var { auth } = this.props;
        var form_data = this.state.form_data;
        var exists = false;
        if(form_data.length) {
            for(var i = 0; i < form_data.length; i++) {
                if(form_data[i].id === form.id) {
                    exists = true;
                }
            }
        }
        form['user_id'] = auth.userInfo.id;
        if(!exists) {
            form_data.push(form);
        } else {
            form_data[form.id] = form;
        }
        
        this.setState({
            form_data : form_data
        })
        
    }

    render() {
        var { language } = this.props;
        var { count } = this.state;
        var screenLocale = screen[language];
        var actionFormItemList = [];
        for(var i = 0; i < count; i++) {
            var actionFormItem = <ActionFormItem key={i} id={i} setFormData={this._setFormData} />;
            actionFormItemList.push(actionFormItem);
        }
        
        return (
            <Main>
                <section className="content-header">
                    <h1>
                        { screenLocale.SCREEN.ACTIONS.ADD_TITLE }
                    </h1>
                    <Breadcrumb />
                </section>
                <section className="content">
                    <div className="row">
                        { actionFormItemList }
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-danger mr10" onClick={this._addForm}><i className="fa fa-plus" aria-hidden="true"></i></button>
                            <button type="submit" className="btn btn-primary mr10" onClick={this._save}><i className="fa fa-floppy-o" aria-hidden="true"></i> { screenLocale.BUTTON.SAVE }</button>
                            <Link to={ AdminRoutes.ROUTE_ACTION }  className="btn btn-warning" onClick={this._back}><i className="fa fa-undo" aria-hidden="true"></i> { screenLocale.BUTTON.BACK }</Link>
                        </div>
                    </div>
                </section>
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language : state.language,
        actions : state.actions,
        types : state.types,
        locations : state.locations,
        auth : state.auth
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);
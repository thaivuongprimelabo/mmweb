import React,  { Component }  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AdminRoutes from '../../constants/routes';
import screen from '../../constants/screen';
import Main from '../../layouts/Main';

class ActionForm extends Component {
  render() {
    var { language } = this.props;
    var screenLocale = screen[language];
    return (
      <Main>
        <section class="content-header">
            <h1>
                { screenLocale.SCREEN.ACTIONS.ADD_TITLE }
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">General Elements</li>
            </ol>
        </section>
        <section className="content">
            <div className="box box-primary">
                <form role="form">
                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">{ screenLocale.SCREEN.NAME }</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.COST }</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.CREATED_AT }</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.LOCATION }</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.COMMENT }</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">{ screenLocale.SCREEN.TYPE }</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                    </div>

                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary mr10">{ screenLocale.BUTTON.SAVE }</button>
                        <Link to={ AdminRoutes.ROUTE_ACTION }  className="btn btn-warning pull-right">{ screenLocale.BUTTON.BACK }</Link>
                    </div>
                </form>
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
        locations : state.locations
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);
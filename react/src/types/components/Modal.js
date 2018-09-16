import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {

    _addType = () => {
        alert('_addType');
    }

    render() {
        var { text } = this.props;

        return (
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                                { text.SCREEN.CREATE_CATE }
                        </div>
                        <div className="modal-body">
                                <form id="frmForm" className="form-horizontal" method="POST" action="?" encType="multipart/form-data">
                                    <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">{ text.SCREEN.NAME }</label>

                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name="name" id="name" />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">{ text.SCREEN.IMAGE }</label>
                                    <div className="col-sm-10">
                                        <input type="file" className="form-control" name="icon" id="icon" />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">{ text.SCREEN.URL }</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name="url" id="url" placeholder="" />
                                    </div>
                                    </div>
                                </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">{ text.BUTTON.CLOSE }</button>
                            <button type="submit" className="btn btn-primary" id="select" onClick={ this._addType }>{ text.BUTTON.REGISTER }</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        text : state.text
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
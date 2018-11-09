import React from 'react';

import screen from '../constants/screen';
import { connect } from 'react-redux';

class ModalConfirm extends React.Component {

    doOk = () => {
        $('#alertModal').modal('toggle');
    }

    render() {

        var { language } = this.props;

        return (
            <div className="modal fade" id="confirmModal" tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body">
                        { this.props.content }
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="confirm_cancel" className="btn btn-secondary btn-flat" data-dismiss="modal">{ screen[language].BUTTON.CLOSE }</button>
                        <button type="button" id="confirm_ok" className="btn btn-primary btn-flat"><i class='fa fa-spinner fa-spin' style="display: none"></i>&nbsp;{ screen[language].BUTTON.OK }</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text : state.text,
        language : state.language
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm);
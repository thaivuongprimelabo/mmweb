import React from 'react';

import screen from '../constants/screen';
import messages from '../constants/messages';
import * as Types from '../redux/actions/actionTypes';
import { connect } from 'react-redux';

class ModalAlert extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        var { auth, language } = nextProps;
        if(this.props.auth !== auth) {

            if(auth.loginStatus === Types.LOGIN_FAILED) {
                this.setState({
                    content : messages[language].MSG_LOGIN_FAILED
                });
                $('#alertModal').modal();
            }

            if(auth.loginStatus === Types.REGISTER_SUCCEED) {
                this.setState({
                    content : messages[language].MSG_COMMON_ERROR
                });
                $('#alertModal').modal();
            }
            
        }
    }

    componentDidMount() {
    }

    doOk = () => {
        $('#alertModal').modal('toggle');
    }

    render() {

        var { language } = this.props;

        return (
            <div className="modal fade" id="alertModal" tabIndex="-1" role="dialog" aria-labelledby="alertModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div id="alert-body" className="modal-body">
                        { this.state.content }
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="alert_ok" className="btn btn-primary" onClick={ this.doOk }>{ screen[language].BUTTON.OK }</button>
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
        language : state.language,
        auth : state.auth
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAlert);
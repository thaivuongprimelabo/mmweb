import React, { Component } from 'react'
import { connect } from 'react-redux';
import screen from '../../constants/screen';
import messages from '../../constants/messages';
import * as Types from '../../redux/actions/actionTypes';

class NoDataTable extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        var { actions } = nextProps;
        if(this.props.actions !== actions) {
            
        }
    } 

    componentDidMount() {
    }

    render() {
        var { language, actions } = this.props;
        var screenLocale = screen[language];
        var text = messages[language].MSG_LOADING;

        if(actions.loadStatus === Types.NO_DATA_FOUND) {
            text = messages[language].MSG_NO_DATA_FOUND
        }
        return (
            <tr><td colSpan={this.props.colSpan} align={'center'}>{text}</td></tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language : state.language,
        actions : state.actions
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoDataTable);
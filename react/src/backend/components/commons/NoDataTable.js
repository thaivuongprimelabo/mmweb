import React, { Component } from 'react'
import { connect } from 'react-redux';
import screen from '../../constants/screen';

class NoDataTable extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {

    } 

    componentDidMount() {
    }

    render() {
        var { language } = this.props;
        var screenLocale = screen[language];

        return (
            <tr><td colSpan={this.props.colSpan} align={'center'}>{screenLocale.SCREEN.NO_DATA_FOUND}</td></tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language : state.language
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoDataTable);
import React, { Component } from 'react'
import { connect } from 'react-redux';

class Footer extends Component {

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
        return (
            <footer className="main-footer">
                <strong>Copyright &copy; 2018 <a href="#!">Zenrin</a>.</strong> All rights reserved.
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
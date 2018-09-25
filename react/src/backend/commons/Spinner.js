import React, { Component } from 'react';

export default class Spinner extends Component {
    render() {
        var { text } = this.props;

        return (
            <div style={{ textAlign:'center', padding:'10px 0px'}}>
                <i className="fa fa-spinner fa-spin" style={{ fontSize:'16px' }}></i> 
                <span style={{ fontSize:'16px', marginLeft:'4px' }}>Đang tải dữ liệu</span>
            </div>
        )
    }
}
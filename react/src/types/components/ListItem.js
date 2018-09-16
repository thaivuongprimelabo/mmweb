import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component {

    _addType = () => {
        alert('_addType');
    }

    render() {
        var { text, type } = this.props;
        // Icon
        var uploadPath = $('#upload_path').val();
        var icon = <img src={ type.icon } width="45" height="45" />;
        if(type.icon.indexOf('http://') < 0 && type.icon.indexOf('https://') < 0) {
            icon = <img src={ uploadPath + '/' + type.icon } width="45" height="45" />;
        }

        // Sync text
        var sync = type.is_sync === 1 ? text.SCREEN.IS_SYNC : text.SCREEN.NOT_SYNC;
        
        return (
            <tr>
                <td data-tag="value" className="text-center">{ type.id }</td>
                <td data-tag="name" className="text-left">{ type.name }</td>
                <td data-tag="icon" className="text-center">
                    { icon }
                </td>
                <td data-tag="is_sync" className="text-center">{ sync }</td>
                <td data-tag="created_at" className="text-right">{ type.created_at }</td>
                <td data-tag="updated_at" className="text-right">{ type.updated_at }</td>
                <td className="text-center"><a href="javascript:void(0)"><i className="fa fa-edit" style={{ fontSize: '20px' }}></i></a></td>
                <td className="text-center"><a href="javascript:void(0)"><i className="fa fa-trash" style={{ fontSize: '20px' }}></i></a></td>
          </tr>

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

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
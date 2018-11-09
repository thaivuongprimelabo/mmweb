import React from 'react';

export default class SidebarItem extends React.Component {
  render() {
    return (
      <div>
        <li><a href="#"><i className="fa fa-circle-o"></i> { this.props.itemname }</a></li>
      </div>
    )
  }
}
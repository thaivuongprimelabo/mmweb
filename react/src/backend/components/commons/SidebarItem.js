import React from 'react';
import { Link } from 'react-router-dom';

export default class SidebarItem extends React.Component {
  render() {
    var childNode = this.props.item.CHILD_NODE;
    var activeMenu = 'treeview';
    var iconRight;
    var renderChildNode;
    if(childNode.length > 0) {
      iconRight = <i className="fa fa-angle-left pull-right"></i>;
      renderChildNode = childNode.map((item, index) => {
        return <li key={index}><Link to={item.URL} ><i className={item.ICON}></i> { item.NAME }</Link></li>
      });
    }

    if(this.props.item.ACTIVE) {
      activeMenu = 'treeview active menu-open';
    }
    return (
      <li className={activeMenu}>
          <a href={this.props.item.URL}>
              <i className={this.props.item.ICON}></i> <span>{this.props.item.NAME}</span>
              <span className="pull-right-container">
              { iconRight }
              </span>
          </a>
          <ul className="treeview-menu">
            { renderChildNode }
          </ul>
      </li>
      
    )
  }
}
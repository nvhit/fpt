import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import Nav from './Nav';
class SideBar extends Component {
  state = {};
  render() {
    let {
      backgroundColor,
      enableBackgroundImage,
      backgroundImage
    } = this.props;

    return (
      <div className="sidebar" data-color={backgroundColor} data-image={backgroundImage}>
        <div className="brand">
          <a href="fb.com/nvhit" className="brand-name">
            <img src={'part logo'} alt="logo" className="logo" />
          </a>
        </div>
        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
          }}>
        </div>
      </div>
    )
  }
}


export default withRouter(
  connect()(SideBar)
);
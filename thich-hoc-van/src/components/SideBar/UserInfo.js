import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import cx from 'classnames';

class UserInfo extends Component {

  state = {
    isShowingUserMenu: false
  };

  render() {
    let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          <img src=""  className="photo" />
          <div className="userinfo">
            <div className="username">

            </div>
            <div className="title">Nguyễn Văn Hùng</div>
          </div>
          <span
            onClick={() => this.setState({ isShowingUserMenu: !this.state.isShowingUserMenu })}
            className={cx("pe-7s-angle-down collapse-arrow", {
              active: isShowingUserMenu
            })}></span>
        </div>
        <Collapse in={isShowingUserMenu}>
          <ul className="nav user-nav">
            <li><a href="#">Xem thông tin</a></li>
            <li><a href="#">Sửa thông tin</a></li>
          </ul>
        </Collapse>
      </div>
    );
  }
}


export default connect()(UserInfo);
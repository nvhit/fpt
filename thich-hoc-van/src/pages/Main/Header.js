import React from 'react';
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, FormGroup, FormControl } from 'react-bootstrap';

const Header = () => (
    <Navbar fluid={true}>
      <Navbar.Collapse>
        <div className="separator"></div>
        <Navbar.Form pullLeft>
          <FormGroup>
            <span className="input-group-addon"><i className="fa fa-search"></i></span>
            <FormControl type="text" placeholder="Tìm kiếm" />
          </FormGroup>
        </Navbar.Form>
        <Nav pullRight>
          <NavItem>Đăng xuất</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );



export default connect()(Header);
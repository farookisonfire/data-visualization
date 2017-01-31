import React from 'react';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class myNavbar extends React.Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Pulse</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={1} title="Total" id="basic-nav-dropdown">
              <LinkContainer to="total">
                <MenuItem eventKey={1.1}>All Cohorts</MenuItem>
              </LinkContainer>
              <MenuItem divider />
            </NavDropdown>
            <LinkContainer to="enrolled">
              <NavItem eventKey={2}>Enrolled</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
    );
  }
}

export default myNavbar;

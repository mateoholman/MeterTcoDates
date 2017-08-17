import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import '../styles/header.css';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Forecastr</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">Admin</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

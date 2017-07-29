import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <Navbar collapseOnSelect>
          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

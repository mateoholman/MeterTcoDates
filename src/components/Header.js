import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <Navbar collapseOnSelect>
          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Downtown - Res / Hotel</NavItem>
            <NavItem eventKey={2} href="#">Downtown - Office</NavItem>
            <NavItem eventKey={3} href="#">Multifamily</NavItem>
            <NavItem eventKey={4} href="#">Office / Warehouse</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

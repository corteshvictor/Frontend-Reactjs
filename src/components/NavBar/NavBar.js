import React from 'react';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';

import './NavBar.css';
const menuList = [
  'Features',
  'Account Options',
  'Course Search',
  'Organizations',
  'About'
];

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>
              <img
                src="https://www.cebroker.com/Content/images/logo-ceb-smallarrows-tablet.png"
                alt="logo CE Broker"
                className="logo-brand"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {menuList.map((item, index) => {
              return <NavItem eventKey={index}>{item}</NavItem>;
            })}
            <Button bsStyle="primary" className="btn-trial">
              7 day trial
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

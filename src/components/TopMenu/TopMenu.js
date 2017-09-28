import React from 'react';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';

import './TopMenu.css';
const menuList = ['Florida', 'Support Center', 'Log in'];

const TopMenu = () => {
  return (
    <div className="top-menu">
      <Navbar inverse collapseOnSelect className="nav-topmenu">
        <Navbar.Collapse>
          <Nav pullRight>
            {menuList.map((item, index) => {
              return <NavItem eventKey={index}>{item}</NavItem>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;

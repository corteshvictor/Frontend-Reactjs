import React from 'react';

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
      <img
        src="https://www.cebroker.com/Content/images/logo-ceb-smallarrows-tablet.png"
        alt="logo CE Broker"
        style={{ height: '40px', alignItems: 'flex-start' }}
      />
      <div className="nav-bar-menu">
        <ul className="ul_nav-bar">
          {menuList.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <a>{item}</a>
              </li>
            );
          })}
        </ul>
        <button className="nav-button">7 day trial</button>
      </div>
    </div>
  );
};

export default NavBar;

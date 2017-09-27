import React from 'react';

import './TopMenu.css';
const menuList = ['Florida', 'Support Center', 'Log in'];

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="ul_top-menu">
        <ul>
          {menuList.map((item, index) => {
            return (
              <li className="menu-item" key={index}>
                <a>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;

import React, { Component } from 'react';

import { TopMenu, NavBar } from '../index';
import { CourseSearch } from '../../containers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="fixed-top-nav">
          <TopMenu />
          <NavBar />
        </div>
        <CourseSearch />
      </div>
    );
  }
}

export default App;

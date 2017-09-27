import React, { Component } from 'react';
import './App.css';

import { TopMenu, NavBar } from '../index';
import { CourseSearch } from '../../containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ position: 'fixed', zIndex: '3', width: '100%' }}>
          <TopMenu />
          <NavBar />
        </div>
        <CourseSearch />
      </div>
    );
  }
}

export default App;

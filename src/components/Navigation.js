import React from 'react';
import Userpic from './Userpic.js';
import Menu from './Menu.js';

class Navigation extends React.Component {
 render() {
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <Userpic />
      <Menu />
    </nav>
    );
  }
}

export default Navigation;

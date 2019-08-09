import React from 'react';

import DropDown from './DropDown';
import { NavLink } from 'react-router-dom';

function Navbar(props) {


  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="nav-active" to="/about/">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/resume/">Resume</NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/programming/">Programming</NavLink>
        </li>
        <li>
          <DropDown menuActive={props.menuActive} display="Other Work" />
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/contact/">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
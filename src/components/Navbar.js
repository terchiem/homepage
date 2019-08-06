import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/resume/">Resume</Link>
        </li>
        <li>
          <Link to="/programming/">Programming</Link>
        </li>
        <li>
          <Link to="/otherwork/">Other Work</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
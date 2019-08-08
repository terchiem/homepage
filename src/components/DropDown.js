import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  showMenu = () => {
    this.setState({visible: true}, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = (event) => {
    if(!this.dropdownMenu.contains(event.target)) {
      this.setState({visible: false}, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div onClick={this.showMenu} className={`dropdown-menu 
      ${this.state.visible ? 'dropdown-menu-visible' : ''}`}>
        <div className="dropdown-menu-nav">
          {this.props.display}
        </div>

        <div 
          className="dropdown-menu-items"
          ref={(element) => this.dropdownMenu = element}
        >
          <ul>
            <li>
              <Link to="/otherwork#animation" smooth>Animation</Link>
            </li>
            <li>
              <Link to="/otherwork#drawing" smooth>Drawing</Link>
            </li>
            <li>
              <Link to="/otherwork#painting" smooth>Painting</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default DropDown;
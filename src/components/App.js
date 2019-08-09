import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import Header from './Header';
import Navbar from './Navbar';
import Page from './Page';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = { menuActive: false }
  }

  setMenuActive = (state) => {
    this.setState(state);
  }

  render() {
    return (
      <div className="app">
        <Header></Header>
        <Router>
          <Navbar menuActive={this.state.menuActive}></Navbar>
          <Page setMenuActive={this.setMenuActive} />
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

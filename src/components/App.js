import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Programming from './Programming';
import OtherWork from './OtherWork';
import Contact from './Contact';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

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
      <div className="App">
        <Header></Header>
        <Router>
          <Navbar menuActive={this.state.menuActive}></Navbar>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/about/" component={About} />
            <Route path="/resume/" component={Resume} />
            <Route path="/programming/" component={Programming} />
            <Route path="/otherwork/" 
              render={(props) => <OtherWork {...props } 
              setMenuActive={this.setMenuActive} />} />
            <Route path="/contact/" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

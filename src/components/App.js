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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about/" component={About} />
          <Route path="/resume/" component={Resume} />
          <Route path="/programming/" component={Programming} />
          <Route path="/otherwork/" component={OtherWork} />
          <Route path="/contact/" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

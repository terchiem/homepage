import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Programming from './Programming';
import OtherWork from './OtherWork';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-img">
          
        </div>
      </header>
      
      <Router>
        <Navbar></Navbar>
        <Route path="/" exact component={About} />
        <Route path="/about/" component={About} />
        <Route path="/resume/" component={Resume} />
        <Route path="/programming/" component={Programming} />
        <Route path="/otherwork/" component={OtherWork} />
        <Route path="/contact/" component={Contact} />
      </Router>
    </div>
  );
}

export default App;

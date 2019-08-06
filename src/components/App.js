import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from './About';
import Resume from './Resume';
import Programming from './Programming';
import OtherWork from './OtherWork';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
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
        </div>

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

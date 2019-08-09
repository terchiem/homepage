import React from 'react';

import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from './About';
import Resume from './Resume';
import Programming from './Programming';
import OtherWork from './OtherWork';
import Contact from './Contact';
import ErrorPage from './ErrorPage';

function Page({ location, setMenuActive }) {
  return (
    <div className="page">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-group">
            <Switch location={location}>
              <Route path="/" exact component={About} />
              <Route path="/about/" component={About} />
              <Route path="/resume/" component={Resume} />
              <Route path="/programming/" component={Programming} />
              <Route path="/otherwork/" 
                render={(props) => <OtherWork {...props } 
                setMenuActive={setMenuActive} />} />
              <Route path="/contact/" component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Page);
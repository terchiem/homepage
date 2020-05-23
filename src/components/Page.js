import React from 'react';

import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from './About';
import Resume from './Resume';
import Programming from './Programming';
import OtherWork from './OtherWork';
import Contact from './Contact';

function Page({ location, setMenuActive }) {
  return (
    <div className="page">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={About} />
            <Route exact path="/homepage" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/programming" component={Programming} />
            <Route exact path="/otherwork" 
              render={(props) => <OtherWork {...props } 
              setMenuActive={setMenuActive} />} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Page);
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/:slug" component={Article} />
      <Route exact path="/about-us" component={About} />
    </div>
  </Router>
);

export default Routes;

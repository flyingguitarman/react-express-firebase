// import dependancies below

import React from 'react';
import { Link, Route } from 'react-router-dom';

// import components below
import About from './components/About';

const App = () => (
  <div>
    <div>
      <h1>Hello World!</h1>
      <Link to="/about">About</Link>
    </div>
    <div>
      <Route path="/about" component={About} />
    </div>
  </div>
);

export default App;

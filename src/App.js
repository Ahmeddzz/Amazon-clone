
import React from "react";
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import Checkout from "./Checkout.js"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    // BEM
    <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/checkout">
            <Checkout />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
          
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;

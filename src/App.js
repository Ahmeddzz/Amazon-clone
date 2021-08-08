
import React, {useEffect} from "react";
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import Checkout from "./Checkout.js";
import Login from "./Login.js";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The USER is >>> ', authUser);

      if (authUser){
        // The user just lgogged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        }
        )

      } else{
         // The user is logged out
         dispatch({
           type: 'SET_USER',
           user: null
         })
      }
    })

    // will only run once when the app component loads
  }, []) 
  return (
    // BEM
    <Router>
    <div className="app">
    
      <Header />
      <Switch>
       
        <Route path="/orders">
          <h1>Orders page</h1>
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      
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

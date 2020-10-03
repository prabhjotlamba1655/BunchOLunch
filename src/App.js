import React from 'react';
import Header from './Header'
import './App.css';
import Scrolling from './Scrolling';
import Menu from './Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Review';
import About from './About'
import Booking from './Booking';

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          
          <Route path="/menu">
            <Header />
            <Menu />
          </Route>

          <Route path="/about">
            <Header />
            <About />
          </Route>

          <Route path="/review">
            <Header />
            <Review />
          </Route>

          <Route path="/booking">
            <Header />
            <Booking />
          </Route>
          
          <Route path="/">
            <Header />
            <Scrolling/>
          </Route>

        </Switch>
      </div>

    </Router>

  );
}

export default App;

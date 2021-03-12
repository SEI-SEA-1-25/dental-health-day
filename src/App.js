import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </main>
    </Router>
  );
}

export default App;

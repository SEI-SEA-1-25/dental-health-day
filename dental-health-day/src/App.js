import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, {Component} from 'react'
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            {" | "}
            <Link to='/services'>Our Services</Link>
            {" | "}
            <Link to='/contact'>Contact Us!</Link>
          </nav>
          <Route  exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}


export default App

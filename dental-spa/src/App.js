import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, {Component} from 'react'
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            {" | "}
            <Link to='/Services'>Our Services</Link>
            {" | "}
            <Link to='/Contact'>Contact Us!</Link>
          </nav>
          <Route  exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
        </div>
      </Router>
    )
  }
}


export default App
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Header from "./components/partials/Header";

function App() {
  const services = [
    "Drillin' And Fillin'",
    "Molar Massage",
    "Cucumber Mask (but for your cavities)",
  ];
  return (
    <Router>
      <Header />
      <main className="App">
        <Route exact path="/" component={Home} />
        <Route path="/services" render={() => <Services services={services} />} />
        <Route path="/contact" component={Contact} />
      </main>
    </Router>
  );
}

export default App;

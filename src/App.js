import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services';
import Header from "./components/partials/Header";
import Service from "./components/pages/Service";
import serviceDetails from "./data/serviceDetails";


function App() {

  const services = [
    "Drillin' And Fillin'",
    "Molar Massage",
    "Cucumber Mask (but for your cavities)",
  ];

  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/services' render={() => <Services services={serviceDetails} />} />
        <Route path="/service/:id" render={(props) => {const service = serviceDetails.find((service) => service.id.toString() === props.match.params.id); props = { ...props, ...service }; return <Service {...props} />}} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;

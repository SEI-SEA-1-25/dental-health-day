import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/Home';
import Services from './components/Services';
import Service from './components/pages/Service';
import Contact from './components/Contact';
import Header from "./components/partials/Header";
import serviceDetails from "./data/serviceDetails"

function App() {
  // const services = [
  //   "Drillin' And Fillin'",
  //   "Molar Massage",
  //   "Cucumber Mask (but for your cavities)",
  // ];
  console.log(serviceDetails)
  return (
    <Router>
      <Header />
      <main className="App">
        <Route 
          exact path="/" 
          component={Home} 
        />
        <Route 
          path="/services" 
          render={() => <Services services={serviceDetails} />} 
        />
        <Route
          path="/services/:id"
          render={(props) => {
            const service = serviceDetails.find(
              (service) => service.id.toString() === props.match.params.id
            );

            props = { ...props, ...service };

            return <Service {...props} />;
          }}
        />
        <Route 
          path="/contact" 
          component={Contact} 
        />
      </main>
    </Router>
  );
}

export default App;

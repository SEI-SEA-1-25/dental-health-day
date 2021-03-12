import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Header from "./components/pages/partials/Header";
import Service from "./components/pages/Service";
import serviceDetails from "./data/serviceDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
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
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
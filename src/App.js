import { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../src/components/pages/Home.jsx'
import Services from '../src/components/pages/Services.jsx'
import Contact from '../src/components/pages/Contact.jsx'
import Header from '../src/components/partials/Header.jsx'
import Service from '../src/components/pages/Service.jsx'
import serviceDetails from '../src/data/serviceDetails.jsx'

export default class App extends Component {

  render () {

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/services" render={() => <Services services={serviceDetails} />} />

          <Route path='/services/:id' render={(props) => {
						    const service = serviceDetails.find(service => service.id.toString() === props.match.params.id)
						    // props = {...service}
					    	return <Service {...service} />
					}} />

          {/* <Route path="/service/:id" render={(props) => <Service {...props} />} /> */}
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}


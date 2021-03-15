import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/partials/Header'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import serviceDetails from './data/serviceDetails';

const App = () => (
  <Router>
  <div>
    <Header />  
    <Route exact path="/" component={Home} />
    <Route path="/services" 
    render={() => <Services services={serviceDetails} />} 
    />
    <Route path="/Contact" component={Contact} />
  </div>
  </Router>
)

  


export default App;


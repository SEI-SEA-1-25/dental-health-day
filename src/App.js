import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Home from './components/Home.jsx';
import Services from './components/Services';
import Contact from './components/Contact'
import Header from './components/Partials/Header';
import Service from './components/Partials/Service'
import serviceDetails from './data/serviceDetails'

const App = () => {

  return (
    <Router>
      <div >
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/Services" render={() => <Services services={serviceDetails} />} />
        <Route 
          path="/service/:id" 
          render={({props}) => {
            const service = serviceDetails.find(
              (service) => service.id.toString() === props.match.params.id
            ); 
            props = {...props, ...service}; 
            return <Service {...props} />
          }} 
        />
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
  )
}
export default App;

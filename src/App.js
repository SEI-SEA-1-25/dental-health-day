import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Contact from './components/pages/Contacts'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Header from './components/partials/Header'


const App = () => (


  <Router>
  <div>
    <Header />
    <Route exact path='/' component={Home} />
    <Route path='/services' component={Services} />
    <Route path='/contact' component={Contact} />
  </div>
  </Router>
)

export default App;

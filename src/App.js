import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Header from './components/partials/Header'
const App = () => {
  <Router>
  <div>
    <Route path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
  </div>
  </Router>
}

export default App
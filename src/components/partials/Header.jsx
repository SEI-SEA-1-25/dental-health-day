import { Link } from 'react-router-dom'

const Header = () => (
    
    <div className="Header">
        <header>   
            <nav>
                <Link to="/">Home Page</Link>{' | '}
                <Link to="/services">Our Services</Link>{' | '}
                <Link to="/contact">Contact</Link>{' | '}
            </nav>
        </header>
  </div>
   
)

export default Header;
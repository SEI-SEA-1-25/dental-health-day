
import {Link} from 'react-router-dom';

const Header = () => (
  <nav>
      <Link to="/">Home</Link>
      {' | '}

      <Link to="/Services">Our Services</Link>
      {' | '}

      <Link to="/contact">Contact Us!</Link>
      {' | '}
  </nav>
)

export default Header;

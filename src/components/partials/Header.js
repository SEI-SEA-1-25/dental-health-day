import {Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <Link to='/'>Home</Link>
        {'  |  '}
        <Link to='/services'>Our Services</Link>
        {'  |  '}
        <Link to='/contact'>Contact Us!!</Link>
    </nav>
)

export default Header;
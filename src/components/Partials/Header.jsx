import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="App-link">
            <Link className="link" to="/home">Home</Link>{ "|" }
            <Link className="link" to="/Services">Services</Link>{" | "}
            <Link className="link" to="/Contact">Contact Us!</Link>
        </nav>
    </header>
)

export default Header;
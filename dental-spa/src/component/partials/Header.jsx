import { Link } from "react-router-dom";
export default function Header() {
    return (
       <header>
            <nav>
            <Link to="/">Go to Home Page</Link>
            {' | '}
            <Link to="/services">See Our Services</Link>
            {' | '}
            <Link to="/contact">Contact Us!</Link>
            </nav>  
       </header>
    )
}
import './Navbar.css'
//links
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return ( <nav>
{/*     <Link to="/">Home</Link>
    <Link to="/about">Sobre</Link> */}
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">Sobre</NavLink>
  </nav>
  )
}

export default Navbar
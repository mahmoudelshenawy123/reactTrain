import { Link ,NavLink  } from 'react-router-dom';
import './navbar.css'

function Navbar(){

    return (
        <nav className='navbar'>
            <h1 className='navbar__brand'>
                INVO REACT
            </h1>
            <ul className='navbar__list'>
                <li className='navbar__list-item'>
                    <NavLink to='/' className='navbar__list-link ' activeClassName ="active">Home</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/about' className='navbar__list-link' activeClassName ="active">About</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/XO' className='navbar__list-link' activeClassName ="active">XO</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
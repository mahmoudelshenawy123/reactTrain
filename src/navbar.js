import { NavLink  } from 'react-router-dom';
import './navbar.css'

function Navbar(){

    return (
        <nav className='navbar'>
            <h1 className='navbar__brand'>
                INVO REACT
            </h1>
            <ul className='navbar__list'>
                <li className='navbar__list-item'>
                    <NavLink to='/' className='navbar__list-link ' activeclassname ="active">Home</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/about' className='navbar__list-link' activeclassname ="active">About</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/XO' className='navbar__list-link' activeclassname ="active">XO</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/fileUpload' className='navbar__list-link' activeclassname ="active">fileUpload</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/Classcomponent' className='navbar__list-link' activeclassname ="active">Classcomponent</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/UsersDetails' className='navbar__list-link' activeclassname ="active">UsersDetails</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/Profile' className='navbar__list-link' activeclassname ="active">Profile</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/Classs' className='navbar__list-link' activeclassname ="active">Classs</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/Counter' className='navbar__list-link' activeclassname ="active">Counter</NavLink>
                </li>
                <li className='navbar__list-item'>
                    <NavLink to='/FormSubmit' className='navbar__list-link' activeclassname ="active">FormSubmit</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
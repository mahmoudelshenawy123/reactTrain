import './navbar.css'

function Navbar(){

    return (
        <nav className='navbar'>
            <h1 className='navbar__brand'>
                INVO REACT
            </h1>
            <ul className='navbar__list'>
                <li className='navbar__list-item'>
                    <a className='navbar__list-link active' href="#">Home</a>
                </li>
                <li className='navbar__list-item'>
                    <a className='navbar__list-link' href="#">About</a>
                </li>
                <li className='navbar__list-item'>
                    <a className='navbar__list-link' href="#">New Blog</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
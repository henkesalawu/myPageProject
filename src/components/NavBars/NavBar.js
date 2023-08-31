import React, { useState } from "react";
import { Link} from 'react-router-dom';
import './NavBar.css';
import AppRoutes from "../../constants/AppRoutes";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => {
        setClick(false);
    }

    return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to={ AppRoutes.HOME} className='navbar-logo' onClick={closeMobileMenu}>
            Wanda Henke-Salawu
            </Link>
        <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
        <Link to={AppRoutes.HOME} className="nav-links" onClick={closeMobileMenu}>
        Home
        </Link>
        </li>
        <li className="nav-item">
        <Link to={AppRoutes.ABOUT} className="nav-links" onClick={closeMobileMenu}>
        About
        </Link>
        </li>
        <li className="nav-item">
        <Link to={AppRoutes.DIY} className="nav-links" onClick={closeMobileMenu}> 
        Diy
        </Link>
        </li>
        <li className="nav-item">
        <Link to={AppRoutes.PROJECTS} className="nav-links" onClick={closeMobileMenu}>
        Projects
        </Link>
        </li>
        </ul> 
        </div>
        </nav>
        </>
            
    )
}


export default NavBar;
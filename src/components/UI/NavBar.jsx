import React from 'react';
import {Link, NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/" className="logo"><strong>Portfo</strong>lio</Link>

                    <button className="dark-mode-btn">
                        <img src={`${process.env.PUBLIC_URL}/img/icons/sun.svg`} alt="Light mode" className="dark-mode-btn__icon"/>
                        <img src={`${process.env.PUBLIC_URL}/img/icons/moon.svg`} alt="Dark mode" className="dark-mode-btn__icon"/>
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/' className="nav-list__link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/projects' className="nav-list__link">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/contacts' className="nav-list__link">
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
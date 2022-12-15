import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
   const pageView = sessionStorage.getItem('pageView');
   const [darkTheme, setDarkTheme] = useState(pageView === 'true' ? true : false);

   // Set Dark Theme
   useEffect(() => {
      const body = document.querySelector('body');
      darkTheme ? body.classList.add('dark') : body.classList.remove('dark');

      // Pass changes to sassionStorage
      sessionStorage.setItem('pageView', darkTheme);

      // Change State
      setDarkTheme(darkTheme);
   }, [darkTheme]);

   return (
      <nav className="nav">
         <div className="container">
            <div className="nav-row">
               <Link to="/" className="logo">
                  <strong>Portfo</strong>lio
               </Link>

               <button
                  className={`dark-mode-btn ${darkTheme ? 'dark-mode-btn--active' : ''}`}
                  onClick={() => setDarkTheme(!darkTheme)}>
                  <img
                     src={`${process.env.PUBLIC_URL}/img/icons/sun.svg`}
                     alt="Light mode"
                     className="dark-mode-btn__icon"
                  />
                  <img
                     src={`${process.env.PUBLIC_URL}/img/icons/moon.svg`}
                     alt="Dark mode"
                     className="dark-mode-btn__icon"
                  />
               </button>

               <ul className="nav-list">
                  <li className="nav-list__item">
                     <NavLink to="/" className="nav-list__link">
                        Home
                     </NavLink>
                  </li>
                  <li className="nav-list__item">
                     <NavLink to="/projects" className="nav-list__link">
                        Projects
                     </NavLink>
                  </li>
                  <li className="nav-list__item">
                     <NavLink to="/contacts" className="nav-list__link">
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

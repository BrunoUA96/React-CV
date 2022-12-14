import React from 'react';

function Banner() {
   return (
      <header
         className="header"
         style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/header-bg.png'})` }}>
         <div className="header__wrapper">
            <h1 className="header__title">
               <strong>
                  Hi, my name is
                  <em> Ostap</em>
               </strong>
               <br />a front-end developer
            </h1>
            <div className="header__text">
               <p>
                  Passionate developer offering 5+ years of experience, strong sense of web design
                  and commitment to the user experience, including the accessibility. Working on
                  wide range of project types, from landing pages to large platforms. Fast
                  adaptation to new Technologies, Frameworks and Program Languages. Comfortable with
                  working with code written by others, and development from scratch. Excellent
                  communication skills and great collaborator
               </p>
            </div>
            <a href={`${process.env.PUBLIC_URL + '/docs/Resume-Ostap-Klysa.pdf'}`} className="btn">
               Download CV
            </a>
         </div>
      </header>
   );
}

export default Banner;

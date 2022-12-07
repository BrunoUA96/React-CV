import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a target="_blank" rel="noreferrer"  href="https://github.com/BrunoUA96">
                                <img src={`${process.env.PUBLIC_URL}/img/icons/gitHub.svg`} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/ostap-klysa-425237108/">
                                <img src={`${process.env.PUBLIC_URL}/img/icons/linkedIn.svg`} alt="Link"/>
                            </a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
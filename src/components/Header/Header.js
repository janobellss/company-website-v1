import React, { useEffect } from 'react';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
    useEffect(() => {
        // console.log("HEADER: IS MENU OPEN? " + props.isMenuOpen);

        const menuBtnBurger = document.querySelector('.site-header__menu-btn-burger');
        const nav = document.querySelector('.site-header__nav');
        const navAnim = document.querySelector('.site-header__nav-anim');

        if(props.isMenuOpen) {
            menuBtnBurger.classList.add('open');
            nav.classList.add('open');
            navAnim.classList.add('open');
        } else {
            menuBtnBurger.classList.remove('open');
            nav.classList.remove('open');
            navAnim.classList.remove('open');
        }
    });

    return(
        <header className='site-header'>
            <div className='site-header__container container'>
                <a href='#' className='site-header__logo'>Logo</a>
                <div className='site-header__menu-btn' onClick={props.toggleMenu}>
                    <span className='site-header__menu-btn-burger'></span>
                </div>

                <nav className='site-header__nav'>
                    <div className='site-header__nav-anim'>
                        <ul className='site-header__nav-items'>
                            <li className='site-header__nav-item active'><a href='#' className='site-header__nav-link'>Home</a></li>
                            <li className='site-header__nav-item'><a href='#' className='site-header__nav-link'>About Us</a></li>
                            <li className='site-header__nav-item'><a href='#' className='site-header__nav-link'>What We Offer</a></li>
                            <li className='site-header__nav-item'><a href='#' className='site-header__nav-link'>Solutions</a></li>
                            <li className='site-header__nav-item'><a href='#' className='site-header__nav-link'>Contact Us</a></li>
                        </ul>
                        <div className='site-header__nav-socials'>
                            <a href='#' className='social-btn site-header__nav-fb-btn'>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                            <a href='#' className='social-btn site-header__nav-in-btn'>
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
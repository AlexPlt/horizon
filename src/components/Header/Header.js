import React from "react";

import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";

import '../../assets/css/header.css';

import logoIconWhite from "../../assets/images/BMW_White_Logo.svg";
import logoIconGrey from "../../assets/images/BMW_Grey_Logo.svg";

const Header = ({ isDesktopOrLaptop, isTabletOrMobile, isScrollTop }) => {
    return (
        <React.Fragment>
            
            <div className={`header ${isScrollTop ? "" : "header-scroll"}`}>
                
                <header>
                    <Link to="/" className="logo-container"></Link>
                    <div className="menu-nav-bar">
                        <div>
                            {isDesktopOrLaptop && <Menu />}
                            <ul className="menu-icon">
                                <li>
                                    <Link className="fa-solid fa-calendar-days" to="/" aria-label="Rendez-vous atelier"></Link>
                                </li>
                                <li>
                                    <Link className="fa-solid fa-cart-shopping" to="/" aria-label="Shop Horizon BMW"></Link>
                                </li>
                                <li>
                                    <Link className="fa-solid fa-location-dot" to="/" aria-label="Points de vente"></Link>
                                </li>
                            </ul>
                        </div>
                        {isDesktopOrLaptop && isScrollTop && <p className="menu-subtitle">Le <b>plaisir</b> de conduire</p>}
                    </div>
                    <Link to="/" className="logo-icon-container">
                        <img src={isScrollTop ? logoIconWhite : logoIconGrey} alt="BMW" />
                    </Link>
                </header>
            </div>
        </React.Fragment>
    );
}

export default Header;
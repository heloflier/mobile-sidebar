import React from "react";
import NavLinks from './NavLinks';

const Navbar = props => {
    return (
        <nav>
            <div className="navbar navbar__content">
                <i
                    className="fa fa-bars fa-2x navbar__hamburger show-for-mobile"
                    onClick={props.sidebarToggleHandler}>
                </i>
                <div className="navbar__logo"><a href="#">SDSA Logo</a></div>
                <div className="navbar__spacer"></div>
                <div className="navbar__nav__items show-for-desktop">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
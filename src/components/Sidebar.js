import React from "react";
import NavLinks from './NavLinks';

const Sidebar = props => {
    let sidebarClass = "sidebar__nav__items show-for-mobile";
    if (props.show) {
        sidebarClass += " open";
    }

    return (
        <div className={sidebarClass}>
            <NavLinks />
        </div>
    );
}

export default Sidebar;
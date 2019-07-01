import React from "react";

const Backdrop = props =>
    (
        <div 
            className="backdrop show-for-mobile"
            onClick={props.sidebarClose}>
        </div>
    );

export default Backdrop;
import React from 'react';

//components
import Sale from "./Sale/Sale";
import HeaderBlock from "./HeaderBlock/HeaderBlock";

const Header = () => {
    return (
        <div>
            <Sale/>
            <HeaderBlock/>
        </div>
    );
};

export default Header;
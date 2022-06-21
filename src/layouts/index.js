import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";


const Layout = ({children}) => {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;
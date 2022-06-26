import React from 'react';
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import StateProvider from "../Context/store";

const Layout = ({children}) => {
    return (
        <div>
            <StateProvider>
            <Header/>
            {children}
            <Footer/>
                </StateProvider>
        </div>
    );
};

export default Layout;
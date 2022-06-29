import React from 'react';

//context
import StateProvider from "../Context/store";

//components
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";



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
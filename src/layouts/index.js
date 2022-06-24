import React from 'react';
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import ProductsProvider from "../Context/context";

const Layout = ({children}) => {
    return (
        <div>
            <ProductsProvider>
                <Header/>
                {children}
                <Footer/>
            </ProductsProvider>
        </div>
    );
};

export default Layout;
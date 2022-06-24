import React, { createContext, useState, useContext, useEffect } from "react";
import {getProducts} from "../api/products";

//context
export const ProductsContext = createContext({
    products: {1:1},
    setProducts: () => {},
});
//hook
export const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw Error("useCurrencyContext should br used within a CurrencyProvider");
    }
    return context;
}

//provider
const ProductsProvider = ({children, defaultProducts = null }) => {
    const [products, setProducts] = useState(defaultProducts)

    const changeProducts = prod => {
        setProducts(prod);
    }

    const getData = async () =>{
        const data = await getProducts();
        setProducts(data)
    }

    useEffect( () => {
        getData()

    }, [])


    return (
        <ProductsContext.Provider value={{ products, setProducts: changeProducts}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;
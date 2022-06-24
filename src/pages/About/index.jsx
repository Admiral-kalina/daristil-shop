import React from 'react';
import {useProductsContext} from "../../Context/context";


const Index = (props) => {
    console.log(props)
    const {products, setProducts} = useProductsContext()

    console.log(products)
    setProducts('zalupa & o da')
    console.log(products)

    return (
        <div>
            ABOUT
        </div>
    );
};

export default Index;
import React from 'react';
import ProductsList from "../ProductsList/ProductsList";

import { useContextState} from "../../Context/store";



const Catalog = () => {
    const {state} = useContextState()

    const products = state.serverData;
    const language = state.language;

    console.log(products)
    return (
        <section>
            <ProductsList products={products} language={language}/>
        </section>
    );
};

export default Catalog;
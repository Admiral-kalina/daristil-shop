import React from 'react';
import ProductsList from "./ProductsList/ProductsList";
import * as styles from "./styles.module.scss"
import {useProductsContext} from "../../Context/context";

const Catalog = () => {
    const {products, setProducts} = useProductsContext()
    console.log(products)
    return (
        <section>
            <ProductsList products={products? products : []}/>
        </section>
    );
};

export default Catalog;
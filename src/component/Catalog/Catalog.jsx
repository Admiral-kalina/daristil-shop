import React, {useContext, useEffect, useReducer, useState} from 'react';
import ProductsList from "./ProductsList/ProductsList";
import * as styles from "./styles.module.scss"
import {MyContext, useMyContext} from "../../Context/store";



const Catalog = () => {
    const {state, setState} = useMyContext()

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
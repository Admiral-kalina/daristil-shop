import React from 'react';
import * as styles from "./styles.module.scss"

const ProductItem = ({products,language}) => {
    const check = language === 'EN'
    console.log(products)
    return (
        <div>
            <p>{check ? products.NameEN: products.NameRU}</p>
            <p>{check ? products.DescriptionEN: products.DescriptionRU}</p>
        </div>
    );
};

export default ProductItem;
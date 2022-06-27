import React from 'react';
import * as styles from "./styles.module.scss"
import ProductItem from "./ProductItem/ProductItem";
const ProductsList = ({products, language}) => {


    return (
        <div className={styles.productsList}>
           <div className={styles.container}>
               <div className={styles.table}>
                      {products.map(item =>
                         <ProductItem key={item.id} products={item} language={language}/>
                      )}
               </div>
           </div>
        </div>
    );
};

export default ProductsList;
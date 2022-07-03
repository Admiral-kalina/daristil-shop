import React from 'react';
import {Link} from "gatsby";
//components
import ProductItem from "./ProductItem";

//styles
import * as styles from "./styles.module.scss"




const ProductsList = ({products}) => {


    return (
        <div className={styles.productsList}>
           <div className={styles.container}>
               <div className={styles.table}>
                      {products.map(item =>
                          <Link key={item.id} to={`/product/${item.id}`}>
                              <ProductItem product={item}/>
                          </Link>
                      )}
               </div>
           </div>
        </div>
    );
};

export default ProductsList;
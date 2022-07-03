import React from 'react';
import {Link} from "gatsby";
//components
import ProductItem from "./ProductItem";
//context
import {useContextState} from "../../Context/store";
//helpers
import {getProductsList} from "../../helpers/productsList";
//styles
import * as styles from "./styles.module.scss"




const ProductsList = () => {

    const {state} = useContextState()
    const products = getProductsList(state)
    console.log(products)

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
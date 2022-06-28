import React from 'react';
import * as styles from "./styles.module.scss"
import Index from "../../pages/product";

import {Link} from "gatsby";
const ProductsList = ({products, language}) => {

    return (
        <div className={styles.productsList}>
           <div className={styles.container}>
               <div className={styles.table}>
                      {products.map(item =>
                          <Link to={`/products/${item.id}`}>
                              <Index key={item.id} products={item} language={language}/>
                          </Link>

                      )}
               </div>
           </div>
        </div>
    );
};

export default ProductsList;
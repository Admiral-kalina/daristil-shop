import React from 'react';
import * as styles from "./styles.module.scss"
const ProductsList = ({products}) => {
    return (
        <div className={styles.productsList}>
           <div className={styles.container}>
               <div className={styles.table}>
                      {products.map(product =>
                          <div style={{margin:'50px'}}>{product.id}</div>
                      )}

               </div>
           </div>
        </div>
    );
};

export default ProductsList;
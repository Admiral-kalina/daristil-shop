import React, {useState} from 'react';

//context
import {useContextState} from "../../Context/store";

//helpers
import {getLanguagePath} from "../../helpers/language";

//styles
import * as styles from "./styles.module.scss"

const ProductItem = ({products, product}) => {

    const {state} = useContextState();

    // add to back

    return(
       <div className={styles.productWrapper}>
           <img className={styles.mainImg} src={`https://admin.daristil.com${product.Picture[0].url}`}/>
           <p>{product[getLanguagePath('Name', state.user.language)]}</p>

           {/*<p>{product[getLanguagePath('Description', state.user.language)]}</p>*/}
           <p>{product.priceUSD} $</p>
       </div>
    )
};

export default ProductItem;
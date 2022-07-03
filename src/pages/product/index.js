import React from 'react';

//context
import {useContextState} from "../../Context/store";

//helpers
import {getLanguagePath} from "../../helpers/language";
import {getProductSelector} from "../../helpers/productsSelector";
import * as styles from "../../component/ProductsList/styles.module.scss";
import ProductItem from "../../component/ProductsList/ProductItem";
import {getProductsList} from "../../helpers/productsList";

const Product = ({ id}) => {
    const {state} = useContextState();
    const product = getProductSelector(state, id)
    const products = getProductsList(state);
    // console.log(product?.Picture[0]?.url)
    return (
         <div
             onClick={() => {}}
             >
             <ProductItem products={products} product={product} fullInformation={true}/>
             {/*<div >*/}
             {/*    huiii*/}
             {/*    /!*<img className={styles.mainImg} src={`https://admin.daristil.com${product?.Picture[0]?.url}`}/>**!/*/}
             {/*    <p>{product[getLanguagePath('Name', state.user.language)]}</p>*/}
             {/*    <p>{product[getLanguagePath('Description', state.user.language)]}</p>*/}
             {/*</div>*/}
         </div>
    );
};

export default Product;
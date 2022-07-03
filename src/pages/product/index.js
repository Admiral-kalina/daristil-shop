import React, {useState} from 'react';

//context
import {useContextState} from "../../Context/store";

//component
import ProductsList from "../../component/ProductsList/ProductsList";

//helpers
import {getLanguagePath} from "../../helpers/language";
import {getProductSelector} from "../../helpers/productsSelector";
import {getProductsList} from "../../helpers/productsList";

//styles
import * as styles from "../../component/ProductsList/styles.module.scss";

const Product = ({ id }) => {
    const [showMore, setShowMore] = useState(false)
    const {state} = useContextState();
    const product = getProductSelector(state, id)
    const products = getProductsList(state);
    // console.log(product?.Picture[0]?.url)

    const sizes = ['XS','S','XL'];

    return (
         <div
             onClick={() => {}}
             >

             <div className={styles.fullInformationProductWrapper}>
                 <div className={styles.productRow}>
                     <div className={styles.productColumn}>
                         <img className={styles.mainImg} src={`https://admin.daristil.com${product.Picture && product?.Picture[0].url}`}/>
                     </div>
                     <div className={styles.productColumn}>
                         <p>{product[getLanguagePath('Name', state.user.language)]}</p>
                         <hr/>
                         <p>{product[getLanguagePath('Description', state.user.language)]}</p>
                         <p>SIZE</p>
                         <select name='size'>
                             {
                                 sizes.map(size =>
                                     <option key={size} value={size}>{size}</option>
                                 )
                             }
                         </select>
                         <p>{product.priceUSD} $</p>
                         <button>BUY</button>
                     </div>
                 </div>
                 <button onClick={()=> setShowMore(prev => !prev)}>{showMore?'HIDE':'SHOW MORE'}</button>
                 {showMore && <ProductsList products={products}/>

                 }
             </div>
             )
         </div>
    );
};

export default Product;
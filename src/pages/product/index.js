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
import {setLocalStorage} from "../../Context/localStorage/actionHandler";
import {localStorageReducer} from "../../Context/localStorage/reducer";

const Product = ({ id }) => {
    const [showMore, setShowMore] = useState(false)
    // const [items, setItems] = useState(JSON.parse(localStorage.getItem('daristil_products')) || [])
    // const [total, setTotal] = useState(0)
    // const [goods, setGoods] = useState([])
    const {state, dispatch} = useContextState();
    const product = getProductSelector(state, id)
    const products = getProductsList(state);
    const sizes = ['XS','S','XL'];


    console.log(state)

    const addingProductToBasket = () =>{
        const row = localStorage.getItem('daristil_products') || [];
        dispatch(setLocalStorage({'asdf':'aaa'}))
        dispatch(setLocalStorage({'aqqw':'aaa'}))
        console.log(state)
        /*localStorage.setItem('daristil_products', JSON.stringify(row))*/
        console.log(row)
    }

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
                         <button onClick={addingProductToBasket}>BUY</button>
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
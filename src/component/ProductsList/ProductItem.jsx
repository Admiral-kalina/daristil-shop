import React from 'react';
//context
import {useContextState} from "../../Context/store";
//helpers
import {getLanguagePath} from "../../helpers/language";

const ProductItem = ({products, product, fullInformation = false}) => {
    const [showMore, setShowMore] = useState(false)
    const {state} = useContextState();

    // add to back
    const sizes = ['XS','S','XL']


   if(fullInformation){
       return(
           <div className={styles.fullInformationProductWrapper}>
              <div className={styles.productRow}>
                  <div className={styles.productColumn}>
                      <img className={styles.mainImg} src={`https://admin.daristil.com${product.Picture[0].url}`}/>
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
               {showMore ?
                   <ProductsList products={products}/>
                   :''

               }
           </div>
           )
   }else{
       return(
       <div className={styles.productWrapper}>
           <img className={styles.mainImg} src={`https://admin.daristil.com${product.Picture[0].url}`}/>
           <p>{product[getLanguagePath('Name', state.user.language)]}</p>

           {/*<p>{product[getLanguagePath('Description', state.user.language)]}</p>*/}
           <p>{product.priceUSD} $</p>
       </div>
       )
   }
};

export default ProductItem;
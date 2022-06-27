import React from 'react';
import * as styles from "./styles.module.scss"
import {useMyContext} from "../../../../Context/store";
import {Link} from "gatsby";

const ProductItem = ({products,language}) => {
    const check = language === 'EN'
    const {state, setState} = useMyContext()



    const handleClick = (id)=>{

        const currentItem = state.serverData.filter(el=>el.id === id)
        setState({...state, filteredData:currentItem})
    }

    return (
     <Link to={'/Product'}>
         <div
             onClick={()=>handleClick(products.id)}
             className={styles.productItem}>
             <div className={styles.container}>
                 <p>{check ? products.NameEN: products.NameRU}</p>
                 <p>{check ? products.DescriptionEN: products.DescriptionRU}</p>
             </div>
         </div>
     </Link>
    );
};

export default ProductItem;
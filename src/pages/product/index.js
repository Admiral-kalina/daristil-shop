import React from 'react';
//context
import {useContextState} from "../../Context/store";
//helpers
import {getLanguagePath} from "../../helpers/language";
import {getProductSelector} from "../../helpers/productsSelector";



const Product = ({ id}) => {

    const {state} = useContextState();
    const product = getProductSelector(state, id)


    return (
         <div
             onClick={() => {}}
             >
             <div >
                 <p>{product[getLanguagePath('Name', state.user.language)]}</p>
                 <p>{product[getLanguagePath('Description', state.user.language)]}</p>

             </div>
         </div>
    );
};

export default Product;
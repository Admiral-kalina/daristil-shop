import React from 'react';

import {useContextState} from "../../Context/store";
import {getLanguagePath} from "../../helpers/language";

const getProductSelector = (state, id) => state.products.serverData?.find(el => el.id === Number(id)) || {};

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

                 {/*<p>{check ? products[NameEN]}</p>*/}
                 {/*<p>{check ? products.DescriptionEN}: </p>*/}
             </div>
         </div>
    );
};

export default Product;
import React from 'react';
//context
import {useContextState} from "../../Context/store";
//helpers
import {getLanguagePath} from "../../helpers/language";

const ProductItem = ({product}) => {
    const {state} = useContextState();

    return (
        <div>
            <p>{product[getLanguagePath('Name', state.user.language)]}</p>
            <p>{product[getLanguagePath('Description', state.user.language)]}</p>
        </div>
    );
};

export default ProductItem;
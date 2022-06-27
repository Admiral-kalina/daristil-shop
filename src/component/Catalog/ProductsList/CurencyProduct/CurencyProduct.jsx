import React from 'react';
import {useMyContext} from "../../../../Context/store";
import * as styles from "./styles.module.scss";

const CurencyProduct = () => {
    const {state, setState} = useMyContext()
    const language = state.language;
    const check = language === 'EN'

    const product = state.filteredData[0];

    return (
        <div>
            <div className={styles.container}>
                <p>{check ? product.NameEN: product.NameRU}</p>
                <p>{check ? product.DescriptionEN: product.DescriptionRU}</p>
                <button>{check ? 'buy' : 'Купить'}</button>
            </div>
        </div>
    );
};

export default CurencyProduct;
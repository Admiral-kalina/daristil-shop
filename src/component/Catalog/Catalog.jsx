import React, {useContext} from 'react';
import ProductsList from "./ProductsList/ProductsList";
import * as styles from "./styles.module.scss"
import {MyContext} from "../../Context/store";

const Catalog = () => {
    const lanVal = useContext(MyContext)

    return (
        <section>

        </section>
    );
};

export default Catalog;
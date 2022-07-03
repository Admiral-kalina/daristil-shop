import React, {useEffect, useState} from 'react';
import shoppingBag from "../../images/shopping-bag.png";
import BasketModal from "./BasketModal";
import * as styles from "./styles.module.scss"

const Basket = () => {
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        const raw = localStorage.getItem("daristil_products");
        const data = JSON.parse(raw);
    }, [])

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }
    return (
        <div onClick={toggleModal} className={styles.basketWrapper}>
            <img src={shoppingBag} alt=""/>
            <div>
                <BasketModal open={modalOpen} onClose={toggleModal}/>
            </div>
        </div>
    );
};

export default Basket;
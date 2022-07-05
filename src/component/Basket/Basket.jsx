import React, {useEffect, useState} from 'react';

//components
import BasketModal from "./BasketModal";

//assets
import shoppingBag from "../../images/shopping-bag.png";

//styles
import * as styles from "./styles.module.scss"

const Basket = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(1)
    // localStorage.setItem("daristil_products", selectedProducts)
    // useEffect(() => {
    //     const data = [{id:'hui'},{id:'pizda'}]
    //     localStorage.setItem("daristil_products", JSON.stringify(data))
    //     const raw = localStorage.getItem("daristil_products");
    //     const parsedData = JSON.parse(raw)
    //     console.log(parsedData)
    //     setSelectedProducts(prev => prev +1)
    //     console.log(selectedProducts)
    //
    // }, [])

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
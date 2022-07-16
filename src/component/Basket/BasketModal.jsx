import React, {useEffect, useState} from 'react';

//components
import Modal from "../Modal/Modal";

//helpers
import {useWindowDimension} from "../../hooks/useDimension";

//styles
import * as styles from "./styles.module.scss";


const BasketModal = ({open, products = [], onClose}) => {
    const [width] = useWindowDimension()

    const [isOpen, setOpen] = useState(open)
    // const handleScroll = useDisableScroll(isOpen)

    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden' //to disable scroll
        }
        return () => {
            onClose()
            document.body.style.overflow = 'unset' //to enable scroll
        }
    }, [isOpen]);

    useEffect(() => {
        setOpen(open);
    }, [open]);

    const closeModal = () => {
        setOpen(false)
    }

 const modalContent = <>
     <div className={styles.basketModalWrapper}>
         Basket

     </div>
 </>
    const isMobile =  width < 1020;

    if(isOpen){
        return isMobile?
            <Modal content={modalContent} onClose={closeModal} open={isOpen}/>
            :
            <div className={styles.modalFull}>
                {modalContent}
            </div>

    }else{
       return null
    }

}
export default BasketModal;
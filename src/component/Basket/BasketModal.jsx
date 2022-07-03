import React, {useEffect, useState} from 'react';

//components
import Portal from "../Portal";

//helpers
import {useWindowDimension} from "../../hooks/useDimension";

//styles
import * as styles from "./styles.module.scss";


const BasketModal = ({open, products = [], onClose}) => {
    const [width, length] = useWindowDimension()

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
     <div className={styles.modalWrapper}>
         Hello bitch
         Is you want my chilapchich?
     </div>
 </>

    if(isOpen){
        return width < 1020?
            <Portal>
            {modalContent}
        </Portal>
            :
            <div className={styles.modal}>
                {modalContent}
            </div>

    }else{
       return null
    }

}
export default BasketModal;
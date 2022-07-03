import React, {useEffect, useState} from "react";

//helpers
import Portal from "../Portal";

//styles
import * as styles from "../Basket/styles.module.scss";


const Modal = ({open, products = [], onClose, content}) => {
    const [isOpen, setOpen] = useState(open);

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

    if(isOpen){
           return <Portal>
                   <div className={styles.overlay} onClick={closeModal}/>
               <div className={styles.modalWrapper}>
                   <div className={styles.modalContentWrapper}>
                       {content}
                   </div>
               </div>
            </Portal>

    }else{
        return null
    }
};

export default Modal;
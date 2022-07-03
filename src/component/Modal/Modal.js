import {useWindowDimension} from "../../hooks/useDimension";
import React, {useEffect, useState} from "@types/react";
import * as styles from "../Basket/styles.module.scss";
import Portal from "../Portal";

const Modal = ({open, products = [], onClose, content}) => {
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

    if(isOpen){
           return <Portal>
               <div className={styles.overlay} onClick={closeModal}></div>
               <div className={styles.modalWrapper}>
                   {content}
               </div>
            </Portal>

    }else{
        return null
    }
};

export default Modal;
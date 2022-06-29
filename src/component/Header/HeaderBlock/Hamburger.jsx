import React from 'react';
import {useState} from 'react';
//styles
import * as style from "./styles.module.scss"
//images
import modalDs from "../../../images/ds_.gif";

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prev => !prev)
    }
    return (
       <div>
           <div onClick={handleClick}
                className={isActive? style.headerMenuIconActive :style.headerMenuIcon }>
               <span></span>
               <span></span>
           </div>
           <div className={` ${style.modal} ${isActive? style.modalActive: ''}`}>
               <div className={style.content}>
                   <p>WOMAN</p>
                   <p>MAN</p>
                   <img className={style.modalGif} src={modalDs} alt=""/>
               </div>
           </div>
       </div>
    );
};

export default Hamburger;
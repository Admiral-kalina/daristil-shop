import React from 'react';
import * as styles from "./styles.module.scss";
import modalDs from "../../../images/ds_.gif";
import {useState} from 'react';
import * as style from "./styles.module.scss"

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
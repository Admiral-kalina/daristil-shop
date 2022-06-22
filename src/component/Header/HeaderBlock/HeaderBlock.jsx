import React from 'react';
import * as styles from  "./styles.module.css"
import user from "../../../images/shopping-bag.png"
const HeaderBlock = () => {
    return (
        <section className={styles.section}>
            <div >
                <div><img src={user} alt=""/></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default HeaderBlock;
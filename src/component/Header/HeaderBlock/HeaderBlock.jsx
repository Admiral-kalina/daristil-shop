import React from 'react';
import * as styles from "./styles.module.scss"
import user from "../../../images/user.png"
import shoppingBag from "../../../images/shopping-bag.png"
const HeaderBlock = () => {
    return (
        <section className={styles.section}>
            <div className={styles.block}>
                <div className={styles.burger}>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <h1>daristil</h1>
                </div>
                    <div className={styles.nav}>
                        <li>RU</li>
                        <li><img src={user} alt=""/></li>
                        <li><img src={shoppingBag} alt=""/></li>
                    </div>
            </div>
        </section>
    );
};

export default HeaderBlock;
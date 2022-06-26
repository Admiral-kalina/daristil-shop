import React, {useReducer, useContext} from 'react';
import * as styles from "./styles.module.scss"
import countryReducer from "../../../Context/countryReducer/countryReducer";
import user from "../../../images/user.png"
import shoppingBag from "../../../images/shopping-bag.png"
import Hamburger from "./Hamburger";
import {MyContext} from "../../../Context/store";

const initialState = {
    lang: 'EN'
}

const HeaderBlock = () => {
    const val = useContext(MyContext)
    console.log(MyContext)
    return (
        <section className={styles.section}>
            <div className={styles.block}>
              <Hamburger />
                <div>
                    <p className={styles.logoText}>daristil</p>
                </div>
                    <div className={styles.nav}>
                        <button>RU</button>
                        <li><img src={user} alt=""/></li>
                        <li><img src={shoppingBag} alt=""/></li>
                    </div>

            </div>
        </section>
    );
};

export default HeaderBlock;
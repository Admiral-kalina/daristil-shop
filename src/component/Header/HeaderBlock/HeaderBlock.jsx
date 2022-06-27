import React, {useReducer, useContext} from 'react';
import * as styles from "./styles.module.scss"
import user from "../../../images/user.png"
import shoppingBag from "../../../images/shopping-bag.png"
import Hamburger from "./Hamburger";
import { useMyContext} from "../../../Context/store";



const HeaderBlock = () => {
    const {state, setState} = useMyContext()

    return (
        <section className={styles.section}>
            <div className={styles.block}>
              <Hamburger />
                <div>
                    <p className={styles.logoText}>daristil</p>
                </div>
                    <div className={styles.nav}>
                        <button onClick={() =>
                            setState(
                                {...state,language:state.language === "EN" ? 'UA' : 'EN'}
                            )}>{state.language}</button>
                        <li><img src={user} alt=""/></li>
                        <li><img src={shoppingBag} alt=""/></li>
                    </div>
            </div>
        </section>
    );
};

export default HeaderBlock;
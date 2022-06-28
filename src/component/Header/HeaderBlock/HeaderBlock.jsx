import React, {useReducer, useContext} from 'react';
import * as styles from "./styles.module.scss"
import user from "../../../images/user.png"
import shoppingBag from "../../../images/shopping-bag.png"
import Hamburger from "./Hamburger";
import { useMyContext} from "../../../Context/store";
import {Link} from "gatsby";



const HeaderBlock = () => {
    const {state, setState} = useMyContext()



    return (
        <section className={styles.section}>
            <div className={styles.block}>
              <Hamburger />
                <div>
                    <ul>
                        <li className={styles.logoText}><Link to={`/ `}>daristil</Link></li>
                    </ul>
                </div>
                <SelectLanguage/>
            </div>
        </section>
    );
};

export default HeaderBlock;
import React from 'react';
import {Link} from "gatsby";

//components
import Hamburger from "./Hamburger";

//helpers
import SelectLanguage from "../../SelectLanguage/SelectLanguage";

//styles
import * as styles from "./styles.module.scss"



const HeaderBlock = () => {

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
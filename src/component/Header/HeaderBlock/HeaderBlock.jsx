import React from 'react';
import {Link} from "gatsby";
//components
import Hamburger from "./Hamburger";
//helpers
import SelectLanguage from "../../SelectLanguage/SelectLanguage";
//styles
import * as styles from "./styles.module.scss"
import user from "../../../images/user.png";
import shoppingBag from "../../../images/shopping-bag.png";
import Basket from "../../Basket/Basket";



const HeaderBlock = () => {

    return (
        <section className={styles.section}>
            <div className={styles.block}>
              <Hamburger />
                <div>
                   <Link className={styles.homeLink} to={`/`}>daristil</Link>
                </div>
              <div className={styles.selectors}>
                  <SelectLanguage/>
                  {/*<img src={user} alt=""/>*/}
                  <Basket/>
              </div>
            </div>
        </section>
    );
};

export default HeaderBlock;
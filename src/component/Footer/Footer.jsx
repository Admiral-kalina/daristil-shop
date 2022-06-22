import React from 'react';
import * as styles from "./styles.module.scss"
import {Link} from "gatsby";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul className={styles.footer_nav}>
                <Link to={`/About`}>About</Link>
                <Link to={`/Help`}>Help</Link>
                <Link to={`/FAQ`}>FAQ</Link>
            </ul>
        </div>
    );
};

export default Footer;
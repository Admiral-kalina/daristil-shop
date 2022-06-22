import React from 'react';
import {Link} from "gatsby";
import YoutubeIcon from "../../assets/YoutubeIcon";
import InstagramIcon from "../../assets/InstagramIcon";
import TelegramIcon from "../../assets/TelegramIcon";

import * as styles from "./styles.module.scss"

const Footer = () => {
    return (
        <footer>
            <nav>
                <li><Link to={`/About`}>about</Link></li>
                <li><Link to={`/Help`}>help</Link></li>
                <li><Link to={`/FAQ`}>faq</Link></li>
            </nav>
            <div className={styles.footer_contacts}>
                <div className={styles.footer_email}>
                    <a href="mailto:info.daristil@gmail.com">info.daristil@gmail.com</a>
                </div>
            </div>
            <div className={styles.footer_socials}>
                <ul>
                    <InstagramIcon />
                    <TelegramIcon />
                    <YoutubeIcon />
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import {Link} from "gatsby";

//styles
import * as styles from "./styles.module.scss"

//images
import YoutubeIcon from "../../assets/YoutubeIcon";
import InstagramIcon from "../../assets/InstagramIcon";
import TelegramIcon from "../../assets/TelegramIcon";
import FooterGif from "../../images/footer_.gif";


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
                <nav>
                    <InstagramIcon />
                    <TelegramIcon />
                    <YoutubeIcon />
                </nav>
            </div>
            <img className={styles.footer_gif} src={FooterGif} alt=""/>
            <p className={styles.copyright}>© 2021 daristil</p>
        </footer>
    );
};

export default Footer;
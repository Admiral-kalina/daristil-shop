import React from 'react';
import AboutImg from '../../images/about_img.png'
import * as styles from "./styles.module.scss"




const Index = (props) => {
    return (
            <div className={styles.about_container}>
                <p className={styles.about_text}>
                    These are clothes with a pronounced taste and unique style today. <br/>
                    She gives you the opportunity to get in touch with the future now. <br/>
                    A style in which details play an important role. The design emphasizes your individuality. <br/>
                    We are made to make you feel special. <br/>
                </p>
                <h3 className={styles.about_title}>YOU ARE FROM THE FUTURE</h3>
                <img src={AboutImg} alt=""/>
            </div>
    );
};

export default Index;
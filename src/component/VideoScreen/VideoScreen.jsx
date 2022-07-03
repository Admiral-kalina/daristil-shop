import React from 'react';
 //images
import mainVideo from '../../images/daristil_preview.mp4';
 //styles
import * as styles from "./styles.module.scss"
import CatalogBar from "../UI/CatalogBanner/CatalogBar";

const VideoScreen = () => {
    return (
        <section className={styles.videoBlock}>
            <CatalogBar/>
            <video

                className={styles.video}
                playsInline
                loop
                autoPlay
                muted
                playsInline
            >
                <source type="video/mp4" src={mainVideo}/>
            </video>
        </section>
    );
};

export default VideoScreen;
import React, {useState} from 'react';
import * as styles from "./styles.module.scss";
import {Link} from "gatsby";

const category = [
    {NameEN:'NEW', male:['man'], options:['T-SHIRT','HOODIE', 'PANTS']},
    {NameEN: 'Clothing', male:['man'], options:[]},
    {NameEN:'HANDBAGS', male:['man'], options:[]},
    {NameEN:'ACCESSORIES', male:['man'], options:[]},
    {NameEN:'SHOES', male:['man'], options:[]},
    {NameEN:'EXCLUSIVE', male:['man'], options:[]},
    {NameEN:'SEASON', male:['man'], options:['2021','2022']}
]

const CatalogBar = () => {

    const [categoriesList, setCategoriesList] = useState([])

    const handleWomanButton = () => {
        setCategoriesList(category.map(el => el))
    }

    const handleManButton = () => {
    }

    return (
        <div>
            <div className={styles.buttonBlock}>
                <button onClick={handleWomanButton}>Woman</button>
                <button onClick={handleManButton}>Man</button>
            </div>
            <div style={{display:'flex'}}>
                {categoriesList.map(el =>
                    <BannerItem el={el}/>
                )}
            </div>

        </div>
    );
};

const BannerItem = ({el}) =>{
    const [hoverArr, setHoverArr] = useState([])

    const mouseOverEvent = (e) => {
        setHoverArr(el.options)
    }
    const mouseLeaveEvent = (e) => {
        setHoverArr([])
    }

    return(
        <Link to={`category/${el.NameEN.toLowerCase()}`}>
            <div
                onMouseOver={mouseOverEvent}
                onMouseLeave={mouseLeaveEvent}
            >
                <p className={styles.link}>{el.NameEN}</p>
                    {hoverArr?.map(hoverItem =>
                        <Link to={`category/${el.NameEN.toLowerCase()}`}>
                             <p className={styles.hoverLink}>{hoverItem}</p>
                        </Link>
                    )}
            </div>
        </Link>
    )
}

export default CatalogBar;
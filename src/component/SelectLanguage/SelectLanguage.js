import React, {useState} from 'react'

//helpers
import {useContextState} from "../../Context/store";

//assets
import user from "../../images/user.png";
import shoppingBag from "../../images/shopping-bag.png";

//styles
import * as styles from "../Header/HeaderBlock/styles.module.scss";

const LANGUAGES = {
    EN: "EN",
    RU: "RU",
};

const setLanguage = (payload) => ({type: "SET_LANGUAGE", payload})

const SelectLanguage = () => {
    const {state, dispatch} = useContextState();
    const [count, setCount] = useState(0);

    const handleChange = () => {
        if (count >= Object.values(LANGUAGES).length - 1) {
            setCount(0)

            dispatch(setLanguage(Object.values(LANGUAGES)[0]))
            return
        }
        setCount(count + 1)
        dispatch(setLanguage(Object.values(LANGUAGES)[count + 1]))
    }

    return  <div className={styles.nav}>
        <button onClick={handleChange}>{state.user.language}</button>
        <li><img src={user} alt=""/></li>
        <li><img src={shoppingBag} alt=""/></li>
    </div>
}

export default SelectLanguage
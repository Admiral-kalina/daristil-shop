import React, {useState} from 'react'
//helpers
import {useContextState} from "../../Context/store";
//action
import {setLanguage} from "../../Context/user/actionHandler";
//assets


//styles
import * as styles from "../Header/HeaderBlock/styles.module.scss";


const LANGUAGES = {
    EN: "EN",
    RU: "RU",
};

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

    return  <div className={styles.languageSelector}>
        <button onClick={handleChange}>{state.user.language}</button>
    </div>
}

export default SelectLanguage
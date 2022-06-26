import React from "react";
import {getProducts} from "../../api/products";

const countryReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "LANG_CHANGE":
            return {
                ...state,
                lang: state.lang === "EN" ? 'UA' : 'EN',
            }
        default:
            return state
    }
}

export default countryReducer
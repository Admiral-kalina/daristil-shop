import React from "react";

const countryReducer = (state, action) => {
    switch (action.type) {
        case "LANG_CHANGE":
            return {
                ...state,
                lang: state.lang === "EN" ? 'UA' : 'EN'
            }
        default:
            return state
    }
}

export default countryReducer
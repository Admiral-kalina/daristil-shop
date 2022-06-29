import {SET_LANGUAGE} from "./actionTypes";

export const userReducer = (state, action) => {
    switch (action.type){

        case SET_LANGUAGE:
            return {...state, language: action.payload}

        default:
            return state;
    }
}
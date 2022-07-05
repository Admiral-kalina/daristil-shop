import {SET_PRODUCTS} from "./actionTypes";

export const productsReducer = (state, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {...state, serverData: action.payload};
        default:
            return state
    }
}
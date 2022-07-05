import {SET_LOCAL_DATA} from "./actionTypes";

export const localStorageReducer = (state, action) => {
    console.log(...state.basket)
    switch(action.type){
        case SET_LOCAL_DATA:
            console.log('a')

            return {...state, basket:[...state.basket,action.payload]};
        default:
            return state
    }

}
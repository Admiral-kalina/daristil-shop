import React, {createContext, useContext, useEffect, useReducer} from 'react';

import {getProducts} from "../api/products";

import {reducers} from "./reducers";
import {combineReducers} from "./combineReducer";
import {SET_PRODUCTS} from "./product/actionTypes";

const initial = {
    products: {
        serverData: [],
    },
    user: {
        language: 'EN',
    },
    localStorage:{
        basket: [{'a':'a'}]
    }
};

export const MyContext = createContext(initial)

export const useContextState = () => {

    const context = useContext(MyContext);
    if (!context) {
        throw Error("useContext should br used within a CurrencyProvider");
    }
    return context;
}


const StateProvider = ({children}) => {

    const [state, dispatch] = useReducer(combineReducers(reducers), initial);

    const getData = async () => {
        const data = await getProducts()
        dispatch({type: SET_PRODUCTS, payload: data})
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <MyContext.Provider value={{state, dispatch}}>
            {children}
        </MyContext.Provider>)
};
export default StateProvider




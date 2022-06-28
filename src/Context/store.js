import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {getProducts} from "../api/products";
import {reducers} from "./reducers";

const initial = {
    products: {
        serverData: [],
    },
    user: {
        language: 'EN',
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
                        //slices = {products: productsReducer, user: userReducer}
const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce( // use for..in loop, if you prefer it
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );


const StateProvider = ({children,  initial}) => {

    const [state, dispatch] = useReducer(combineReducers(reducers), initial);

    const getData = async () => {
        const data = await getProducts()
        dispatch({type: "SET_PRODUCTS", payload: data})
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





import React, {createContext, useContext, useEffect, useState} from 'react';
import {getProducts, setProducts} from "../api/products";



const initial = {

    language: '',
    serverData: [],
};

export const MyContext = createContext(initial)

export const useMyContext = () => {

    const context = useContext(MyContext);
    if (!context) {
        throw Error("useCurrencyContext should br used within a CurrencyProvider");
    }
    return context;
}

const StateProvider = ({children, defaultState = initial}) => {

    const [state, setState] = useState(defaultState)

    const getData = async () => {
        const data = await getProducts()
        setState(
            {...state, serverData: data}
        )
    }

    const changeState = state => {
        setState(state)
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <MyContext.Provider value={{state, setState: changeState}}>
            {children}
        </MyContext.Provider>)
};
export default StateProvider




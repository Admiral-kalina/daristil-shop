import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {getProducts} from "../api/products";
import {reducers} from "./reducers";

const initial = {
    language: 'EN',
    serverData: [],
    filteredData:[],
};

export const MyContext = createContext(initial)

export const useContextState = () => {

    const context = useContext(MyContext);
    if (!context) {
        throw Error("useContext should br used within a CurrencyProvider");
    }
    return context;
}

const StateProvider = ({children,  initial}) => {

    const [state, setState] = useState(defaultState)

    const getData = async () => {
        const data = await getProducts()
        setState(
            {...state, serverData: data}
        )
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




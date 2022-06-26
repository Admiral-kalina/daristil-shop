import React, {createContext, useReducer} from 'react';

const initialState = {
    language: {lang: 'EN', currency: 'USD'},
    serverData:{12:12}
};
export const MyContext = createContext(initialState);

const StateProvider = ({children}) => {
    return (
        <MyContext.Provider value={initialState}>
            {children}
        </MyContext.Provider>)
};
export default StateProvider

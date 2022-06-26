import React, {createContext, useReducer} from 'react';

const initialState = {lang: 'en', currency: 'USD'};
export const MyContext = createContext(initialState);

const StateProvider = ({children}) => {
    return (
        <MyContext.Provider value={initialState}>
            {children}
        </MyContext.Provider>)
};
export default StateProvider

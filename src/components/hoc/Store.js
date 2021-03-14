import React, {createContext, useReducer} from 'react';
import cart, {ini_state} from './cart.reducer';

export const Store = createContext()

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart, ini_state());
    const value = {state, dispatch}
    return <Store.Provider value={value}>
        {children}
    </Store.Provider>
}

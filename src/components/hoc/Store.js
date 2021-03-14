import React, {createContext, useReducer} from 'react';
import cart, {INI_STATE} from '../../redux/cart/cart.reducer';

export const Store = createContext()

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart, INI_STATE);
    const value = {state, dispatch}
    return <Store.Provider value={value}>
        {children}
    </Store.Provider>
}

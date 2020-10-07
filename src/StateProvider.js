import React, {createContext, useContext, useReducer} from 'react';

//prepares data layer
export const StateContext = createContext();

//data layer
//children refers to whatever is wrapped inside StateProvider
export const StateProvider = ({initialState, reducer, children }) => ( 
    <StateContext.Provider value={useReducer(reducer, initialState)} > 
        {children}
    </StateContext.Provider>

);

//function that lets us push into the data layer
export const useStateProviderValue = () => useContext(StateContext)
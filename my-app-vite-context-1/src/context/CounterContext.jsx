// criar context

import { createContext, useState } from "react";

export const CounterContext = createContext();

// provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {CounterContextProvider.children}
        </CounterContext.Provider>
    )
}
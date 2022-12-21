import React from "react";

const contextData = React.createContext();

function ContextDataProvider({children}){
    const hola = 'Desde el contexto'
    return (<contextData.Provider value={{
        hola
    }}>
                {children}
            </contextData.Provider>)
}

export {contextData, ContextDataProvider}
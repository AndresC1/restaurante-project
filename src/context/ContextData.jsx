import React, { useState } from "react";
import menu from '../data/menu'

const contextData = React.createContext();

function ContextDataProvider({children}){
    const [DataDish, setDataDish] = useState([...menu])
    const [ValueDishSearch, setValueDishSearch] = useState('')

    let SearchDish = (elementSearch) => {
        const result = menu.filter((element) => element.plato.toLowerCase().includes(elementSearch.toLowerCase()))
        setDataDish(result)
    }
    let changeDishSearch = (e) => {
        setValueDishSearch(e)
        SearchDish(e)
    }

    return (<contextData.Provider value={{
                DataDish,
                SearchDish,
                ValueDishSearch,
                changeDishSearch
            }}>
                {children}
            </contextData.Provider>)
}

export {contextData, ContextDataProvider}
import React, { useRef, useState } from "react";
import menu from '../data/menu'

const contextData = React.createContext();

function ContextDataProvider({children}){
    const [DataDish, setDataDish] = useState([...menu])
    const [ValueDishSearch, setValueDishSearch] = useState('')
    const RefWindowEmergent = useRef(null)
    const [ValueViewDish, setValueViewDish] = useState(null)

    let SearchDish = (elementSearch) => {
        const result = menu.filter((element) => element.plato.toLowerCase().includes(elementSearch.toLowerCase()))
        setDataDish(result)
    }
    let changeDishSearch = (e) => {
        setValueDishSearch(e)
        SearchDish(e)
    }
    let OpenWindowEmergent = (element) => {
        RefWindowEmergent.current.className = 'w-full h-full top-0 right-0 fixed bg-color_fondo_modal'
        setValueViewDish(element)
    }

    let ClosedWindowEmergent = () => {
        RefWindowEmergent.current.className = RefWindowEmergent.current.className + ' hidden'
    }

    let DishFav = (element) => {
        let newValue
        if(element.favorito){
            newValue = DataDish.map(item => {
                if(item.plato === element.plato){item.favorito = false}
                return item
            })
        } else{
            newValue = DataDish.map(item => {
                if(item.plato === element.plato){item.favorito = true}
                return item
            })
        }
        setDataDish(newValue.sort((a, b) => b.favorito - a.favorito))
    }

    return (<contextData.Provider value={{
                DataDish,
                SearchDish,
                ValueDishSearch,
                changeDishSearch,
                RefWindowEmergent,
                OpenWindowEmergent,
                ClosedWindowEmergent,
                ValueViewDish,
                DishFav
            }}>
                {children}
            </contextData.Provider>)
}

export {contextData, ContextDataProvider}
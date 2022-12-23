import React from 'react'
import useContextDataApp from '../../hooks/useContextData'
import BoxDish from './BoxDish'
import EmptyList from './EmptyList'

export default function ListMenu() {
    const contexto = useContextDataApp()

    const data = contexto.DataDish.map((element) => {
        return <BoxDish key={element.id} value={element}/>
    })
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 m-auto'>
            {(contexto.DataDish.length===0)? <EmptyList/> : data}
        </div>
    )
}

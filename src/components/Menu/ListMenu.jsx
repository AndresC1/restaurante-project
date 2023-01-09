import React from 'react'
import useContextDataApp from '../../hooks/useContextData'
import BoxDish from './BoxDish'
import EmptyList from './EmptyList'

export default function ListMenu() {
    const contexto = useContextDataApp()
    const DataOrd = contexto.DataDish.sort((a, b) => b.favorito - a.favorito)

    const data = DataOrd.map((element) => {
        return <BoxDish key={element.id} value={element}/>
    })
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 m-auto w-full max-w-[75em]'>
            {(contexto.DataDish.length===0)? <EmptyList/> : data}
        </div>
    )
}

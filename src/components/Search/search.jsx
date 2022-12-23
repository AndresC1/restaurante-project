import React from 'react'
import useContextDataApp from '../../hooks/useContextData'

export default function Search() {
  const contexto = useContextDataApp()
  return (
    <div className='w-full flex justify-center items-center md:mb-10 h-20 xl:mt-10 md:mt-5'>
      <input onChange={(e) => {contexto.changeDishSearch(e.target.value)}} value={contexto.ValueDishSearch} className='xl:w-8/12 2xl:w-6/12 md:w-10/12 w-11/12 h-10 rounded-lg text-gray-900 px-4' placeholder='Buscar plato' type="text" />
    </div>
  )
}

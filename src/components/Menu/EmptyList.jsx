import React from 'react'

export default function EmptyList() {
  return (
    <div className='col-span-2 flex justify-center items-center h-20 mt-10 '>
        <div className='border-2 lg:w-5/12 md:w-8/12 w-full h-full flex justify-center items-center rounded-xl shadow-2xl shadow-red-300 text-red-900 border-red-900'>
            No se encontraron resultados
        </div>
    </div>
  )
}

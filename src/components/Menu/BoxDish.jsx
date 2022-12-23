import React from 'react'
import { TiShoppingCart } from 'react-icons/ti';

export default function BoxDish(props) {
    return (
        <>
            <div className=' h-auto m-2 p-3 bg-white rounded-2xl md:flex hidden items-stretch'>
                <div className='w-4/12'>
                    <div className=' bg-degradado_primario h-full rounded-xl flex justify-center items-center'>
                        <img className='w-10/12 h-auto hover:scale-105' src={props.value.imagen} alt="" />
                    </div>
                </div>
                <div className='m-2 w-7/12 py-4'>
                    <h1 className='w-full text-center text-xl font-mono font-bold'>{props.value.plato}</h1>
                    <h1 className='w-9/12 m-auto h-16 my-5 text-gray-600 font-mono font-normal'>{props.value.descripcion}   </h1>
                    <h1 className='w-full h-10 flex justify-center items-center text-green-800 font-bold text-lg font-mono'>U$ {props.value.precio}</h1>
                    <button className='w-9/12 bg-green-900 hover:scale-105 text-white font-semibold text-lg flex justify-center items-center h-12 rounded-xl m-auto mt-6 mb-2'><TiShoppingCart className='mr-3 w-5 h-auto'/>Ordenar</button>
                </div>
            </div>
            <div className='md:hidden flex flex-col mt-28 rounded-xl p-3 justify-evenly bg-gradient-to-r from-degradado_primario to-degradado_secundario'>
                <img className='w-52 h-52 m-auto -mt-24' src={props.value.imagen} alt={props.value.plato} />
                <h1 className='mt-4 w-11/12 m-auto text-lg font-mono font-bold text-center'>{props.value.plato}</h1>
                <h1 className='mt-4 w-9/12 m-auto text-gray-800 text-center mb-6'>{props.value.descripcion}</h1>
                <h1 className='w-9/12 m-auto text-xl text-center font-bold text-green-800 mb-5'>U$ {props.value.precio}</h1>
                <button className='w-10/12 bg-green-900 text-color_blanco m-auto h-12 mb-5 rounded-xl flex justify-center items-center'><TiShoppingCart className='mr-3 w-5 h-auto'/>Ordenar</button>
            </div>
        </>
    )
}
import React from 'react'
import { RxReader } from 'react-icons/rx';
import { AiTwotoneHeart, AiOutlineHeart } from 'react-icons/ai';
import useContextDataApp from '../../hooks/useContextData';

export default function BoxDish(props) {
    const contexto = useContextDataApp()
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
                    <h1 className='w-full h-10 flex justify-center items-center text-green-800 font-bold text-lg font-mono'>U$ {parseFloat(props.value.precio).toFixed(2)}</h1>
                    <div className='w-9/12 m-auto flex justify-start items-center'>
                        <button onClick={(e) => contexto.OpenWindowEmergent(props.value)} className='bg-green-900 w-10/12 hover:scale-105 text-white font-semibold text-lg flex justify-center items-center h-12 rounded-xl m-auto mt-6 mb-2'><RxReader className='mr-3 w-5 h-auto'/>Ver mas</button>
                        <button onClick={(e) => contexto.DishFav(props.value)} className='w-2/12 flex justify-center items-center h-12 mt-4 ml-1'>{props.value.favorito ? <AiTwotoneHeart className='h-auto w-8 hover:scale-110 text-red-600'/> : <AiOutlineHeart className='h-auto w-8 hover:scale-110 text-gray-900'/>}</button>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex flex-col mt-28 rounded-xl p-3 justify-evenly bg-gradient-to-r from-degradado_primario to-degradado_secundario'>
                <img className='w-52 h-52 m-auto -mt-24' src={props.value.imagen} alt={props.value.plato} />
                <h1 className='mt-4 w-11/12 m-auto text-lg font-mono font-bold text-center'>{props.value.plato}</h1>
                <h1 className='mt-4 w-9/12 m-auto text-gray-800 text-center mb-6'>{props.value.descripcion}</h1>
                <h1 className='w-9/12 m-auto text-xl text-center font-bold text-green-800 mb-5'>U$ {parseFloat(props.value.precio).toFixed(2)}</h1>
                <div className='w-10/12 m-auto flex justify-start items-center'>
                    <button onClick={(e) => contexto.OpenWindowEmergent(props.value)} className='bg-green-900 w-10/12 hover:scale-105 text-white font-semibold text-lg flex justify-center items-center h-12 rounded-xl m-auto mt-6 mb-2'><RxReader className='mr-3 w-5 h-auto'/>Ver mas</button>
                    <button onClick={(e) => contexto.DishFav(props.value)} className='w-2/12 flex justify-center items-center h-12 mt-4 ml-1'>{props.value.favorito ? <AiTwotoneHeart className='h-auto w-8 hover:scale-110 text-red-600'/> : <AiOutlineHeart className='h-auto w-8 hover:scale-110 text-gray-900'/>}</button>
                </div>
            </div>
        </>
    )
}
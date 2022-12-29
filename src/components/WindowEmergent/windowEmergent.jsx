import React from 'react'
import useContextDataApp from '../../hooks/useContextData'
import { GrClose } from 'react-icons/gr';
import { AiTwotoneStar } from 'react-icons/ai';


export default function WindowEmergent() {
    const contexto = useContextDataApp()
    var element = ''
    if(contexto.ValueViewDish!=null){
        element = contexto.ValueViewDish
    }
    return (
        <div ref={contexto.RefWindowEmergent} className='w-full transition-all hidden h-full top-0 right-0 fixed bg-color_fondo_modal'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='xl:w-6/12 lg:w-9/12 w-11/12 h-5/6 px-2 pt-2 pb-14 lg:h-auto bg-white rounded-2xl'>
                    <div className='w-full h-12 flex justify-end items-center'>
                        <button onClick={contexto.ClosedWindowEmergent} className='w-5 h-5 mr-4 hover:scale-110 transition-all'><GrClose className='w-full h-full'/></button>
                    </div>
                    <div className='grid grid-cols-10 h-full xl:px-14 md:px-8 overflow-y-scroll lg:overflow-y-hidden' id='contenido'>
                        <div className='col-span-4 rounded-xl w-full h-96 flex justify-center items-center'>
                            <img className='w-10/12 h-auto my-5 hover:scale-105 transition-all mx-16' src={element.imagen} alt={element.plato} />
                        </div>
                        <div className='col-span-6'>
                            <h1 className='h-20 mt-4 w-8/12 m-auto text-center flex justify-center items-center text-xl md:text-2xl font-mono font-bold'>{element.plato}</h1>
                            <h1 className='w-8/12 m-auto text-gray-600 font-mono my-3 text-sm md:text-base'>{element.descripcion}</h1>
                            <h1 className='w-full h-100 font-bold text-2xl md:mt-6 xl:mt-4 mt-10 flex justify-center items-center font-mono text-green-900'>U$ {parseFloat(element.precio).toFixed(2)}</h1>
                            <div className=' bg-degradado_primario flex flex-col justify-center items-center m-auto w-9/12 xl:mt-10 md:mt-8 mt-10 mb-8 rounded-xl py-3'>
                                <h1 className='xl:text-lg md:text-base font-mono font-bold text-gray-600'>Valoraci&oacute;n</h1>
                                <h1 className='xl:text-5xl md:text-3xl text-gray-600 font-extrabold flex flex-row justify-center items-center'>{element.valoracion}<AiTwotoneStar className='h-auto w-5 ml-1'/></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

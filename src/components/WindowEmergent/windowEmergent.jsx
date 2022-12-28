import React from 'react'
import useContextDataApp from '../../hooks/useContextData'
import { GrClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';


export default function WindowEmergent() {
    const contexto = useContextDataApp()
    var element = ''
    if(contexto.ValueViewDish!=null){
        element = contexto.ValueViewDish
    }
    return (
        <div ref={contexto.RefWindowEmergent} className='w-full transition-all hidden h-full top-0 right-0 fixed bg-color_fondo_modal'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-6/12 px-2 pt-2 pb-14 h-auto bg-white rounded-2xl'>
                    <div className='w-full h-12 flex justify-end items-center'>
                        <button onClick={contexto.ClosedWindowEmergent} className='w-5 h-5 mr-4'><GrClose className='w-full h-full'/></button>
                    </div>
                    <div className='grid grid-cols-10 h-96 px-14'>
                        <div className='col-span-4 rounded-xl w-full h-full flex justify-center items-center bg-degradado_primario'>
                            <img className='w-10/12 h-auto my-5 mx-16' src={element.imagen} alt={element.plato} />
                        </div>
                        <div className='col-span-6'>
                            <h1 className='h-20 mt-4 flex justify-center items-center text-2xl font-mono font-bold'>{element.plato}</h1>
                            <h1 className='w-full h-100 font-bold text-2xl flex justify-center items-center font-mono text-green-900'>U$ {element.precio}</h1>
                            <div className='w-4/12 m-auto h-8 mt-10 flex justify-between items-center'>
                                <button className='w-8 font-bold border-2 rounded-md'><BiMinus/></button>
                                <input className='w-16 text-center border-2 rounded-md' type="text" value={0} readOnly />
                                <button className='w-8 font-bold border-2 rounded-md'><BsPlusLg/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

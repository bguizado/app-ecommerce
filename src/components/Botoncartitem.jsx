import React from 'react'

export const Botoncartitem = ({data, addToCart}) => {
  return (
    <button className="bg-orange-300 rounded-full h-[40px]" onClick={() => addToCart(data.id)}>
             <p className="text-white font-bold pl-4 pr-4"> Agregar al Carrito</p> 
            </button> 
  )
}

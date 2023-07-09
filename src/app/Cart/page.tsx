"use client"
import Preciocart from '@/components/Preciocart'
import Link from 'next/link'
import React, {useContext} from 'react'
import { Store } from '../context/store'

function page() {
  const {state, dispatch} = useContext(Store)
  const {cart : {cartItems}} = state

  const removeCartHandler = (item)=>{
      dispatch({type: 'CART_REMOVE_ITEM', payload: item})
  }

  //funcion para actualizar el carrito
  const updateCartHandler = (item , qty)=>{
      const quantity = Number(qty)
      dispatch({type: 'CARD_ADD_ITEM', payload:{...item, quantity}})
  }

  return (
    <div className='p-0 w-auto h-4/5'>
    {/* ver si se puede aplicar flex-1 al contenido y al body colocarle flex  y quitar ese p-*/} 
    { <Preciocart/>}
    <div className="flex justify-center p-10 bg-[#F8F8F9]"> 
       <Link href={"/Checkout"}>
        <button className="text-[white] rounded-3xl bg-[#F39C34] w-64 h-12 ">
                    <h3 className="text-lg "> Pagar </h3>
                </button>
         </Link>
            </div>
  </div>
  )
}

export default page
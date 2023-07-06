'use client'

import { IProducts } from "@/models/product";
import Modal from "@/components/Modal";
import { useState } from "react";


export default function product({ params }: { params: IProducts }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <p>Modelo de producto: {params.id} </p>
      <button className='bg-orange-400 text-white rounded-xl py-2 px-6 mt-6 mb-4 hover:bg-orange-500' onClick={() => setShowModal(true)}>Agregar al carrito</button>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
        <h1 className='text-3xl font-bold p-3'>Exito!</h1>
        <p className='w-36 text-center text-slate-400'>El producto fue agregado al carrito</p>
        <button className='bg-orange-400 text-white rounded-xl py-2 px-6 mt-6 mb-4 hover:bg-orange-500'   onClick={() => setShowModal(false)} >Seguir comprando</button>
        <button className='text-slate-400 border-2 border-slate-300 rounded-xl py-2 px-6 hover:bg-slate-300 hover:text-white' onClick={() => setShowModal(false)}>Salir</button>
      </Modal>
    </div>
  )
}
"use client"
import { useState, useEffect } from "react"
import Modal from "@/components/Modal"
import Link from "next/link"
function Carritocompras({product}) {
  
  const [numpro , setnumpro] = useState(1)
   const [showModal, setShowModal] = useState(false);
  function Restar () { if(numpro>1) return setnumpro(numpro-1)}
  return (

    <div className=" flex flex-shrink-0  border-b-2 border-b-gray-300 justify-around items-center box-content max-w-full"> 
     <img src={product.imagen1}
       alt="" className="w-28 h-24 items-center  inline-block"/>
      <div className="">
        <h2 className="text-lg tex-neutral-500 justify-center w-35 text-[#99A4AC] flex-nowrap font-bold">{product.nombre}</h2>
        <p className="tex-sm w-30 h-8"> S./ {product.precio}</p>
      </div>
      
      <div className="flex-col items-baseline">
        <button className="text-2xl w-3.5 h-9 b-2 text-center font-normal " onClick={()=> { setnumpro (numpro +1)}} >
        +
        </button> 
        <div className="flex">
          {/*en el parrafo modificar tamaño de letra recomendado 0.925rem*/}
        <p className="text-lg font-normal text-center w-4 mr-1">
          {numpro}
        </p> 
        <button className="ml-4" onClick={() => setShowModal(true)}> <svg className="h-6 w-6 text-red-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
</svg>
</button>
        </div> 
        <button className="text-2xl w-3 h-9 text-center font-normal" onClick={Restar}>
          -
        </button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <h1 className="text-3xl font-bold p-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

              </h1>
              <p className="w-36 text-center text-slate-400">
                El producto fue eliminado!
              </p>
              <Link href={"/Cart"}>
              <button
                className="bg-orange-400 text-white rounded-xl py-2 px-6 mt-6 mb-4 hover:bg-orange-500"
                onClick={() => setShowModal(false)}
              >
                Ok
              </button>
              </Link>
              <Link href={"/"}>
              <button
                className="text-slate-400 border-2 border-slate-300 rounded-xl py-2 px-6 hover:bg-slate-300 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                Seguir comprando
              </button>
              </Link>
            </Modal>

    </div>
    
  )
}


export default Carritocompras
"use client"
import Carritocompras from "./Carritocompras"
let Pdelivery = " s./ 00.00"
let pproductos = "s./ 2701.12"
import {Datacart} from "../api/datacart"
import { useState } from "react"
function Preciocart() {
    return (
    
    <div>
        <div className=" pb-7">
            {Datacart.map((product)=> (<Carritocompras key={product.id} product={product}/>))}
        </div>
        <div className="  py-3 grid grid-cols-2 gap-1 justify-around justify-items-center text-xl font-medium text-[#99A4AC] border-y-2 border-b-gray-300">
            <h3 className="justify-self-start ml-4 "> Total:
            </h3>
            <p className="justify-self-end mr-4 ">{pproductos}</p>
            <h3 className="justify-self-start ml-4 "> Delivery: </h3>
            <p className="justify-self-end mr-4">{Pdelivery}</p>
        </div>
        <div className=" flex justify-between py-6 text-2xl text-[#696C6F] font-medium border-b-8 rounded-b-3xl border-b-gray-500">
            <h2 className="px-4 "> Total a pagar: </h2>
            <p className="px-4"> {pproductos}</p>
        </div>
           

    </div>
  )
}

export default Preciocart
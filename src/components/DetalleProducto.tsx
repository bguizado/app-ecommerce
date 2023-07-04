import React from 'react'
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { IProducts } from "@/models/product";

const DetalleProducto:React.FC<{ item: IProducts }> = ({ item }) => {
  return (   
    <div className='w-[200px] h-[200px] bg-red-200'>
      <Image
        src={item.imagen1}
        alt={`imagen de ${item.nombre}`}
        className="object-fill object-center"
        width={500}
        height={500}
        priority={true}
      />
      <div className="text-center">
    <h3 className="text-gray-900 h-auto sm:h-[46px]">
      {
        item.nombre
      }
    </h3>
    </div>
    </div>  
  )
}

export default DetalleProducto
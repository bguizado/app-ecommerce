import React from 'react'
import {getProducts} from '../api/api'
import Image from 'next/image';
import { Products } from '@/models/product';

export async function Cards() {
  const products = await getProducts();
  return (
    <div className='flex flex-row w-full p-2 justify-center'>
      {products.map((product: Products) => (
        <div key={product.id} className='flex flex-col justify-between items-start'>
          <Image src={product.imagen1} alt={`imagen de ${product.nombre}`}  width={100} height={100} priority={true}/>
          <p className='text-base'>{product.nombre}</p>
          <p className='text-xs'>{product.marca}</p>
          <p className='text-sm'>{'S/'}{product.precio}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
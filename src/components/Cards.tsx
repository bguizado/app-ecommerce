import React from "react";
import { getProducts } from "../api/api";
import Image from "next/image";
import { IProducts } from "@/models/product";
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export async function Cards() {
  const products = await getProducts();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Hola Mundo</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: IProducts) => (
            <div
              key={product.id}
              className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
            >
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <Image
                  src={product.imagen1}
                  alt={`imagen de ${product.nombre}`}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                  priority={true}
                />
              </div>
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.nombre}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.valoracion}</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((valoracion) => (
                      <StarIcon
                        key={valoracion}
                        className={classNames(
                          product.valoracion > valoracion
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.marca}
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {"S/ "}
                  {product.precio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export async function Cards() {
//   const products = await getProducts();
//   return (
//     <div className='flex flex-row w-full p-2 justify-center'>
//       {products.map((product: Products) => (
//         <div key={product.id} className='flex flex-col justify-between items-start'>
//           <Image src={product.imagen1} alt={`imagen de ${product.nombre}`}  width={100} height={100} priority={true}/>
//           <p className='text-base'>{product.nombre}</p>
//           <p className='text-xs'>{product.marca}</p>
//           <p className='text-sm'>{'S/'}{product.precio}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

export default Cards;

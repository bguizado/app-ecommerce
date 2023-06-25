import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Cards(props: any) {

  const product = props.product;

  return (
    <div className="group relative border border-gray-200 shadow-lg rounded-xl p-0.5 sm:p-6">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <Image
          src={product.imagen1}
          alt={`imagen de ${product.nombre}`}
          className="h-full w-full object-fill object-center"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className="pb-4 pt-0.5 pl-0.5 text-left sm:text-center">
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
          <p className="mt-1 text-sm text-gray-500">{product.marca}</p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">
          {"S/ "}
          {product.precio}
        </p>
      </div>
    </div>
  );
}

export default Cards;

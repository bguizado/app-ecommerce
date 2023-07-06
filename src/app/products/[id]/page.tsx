"use client";
import { useEffect, useState } from "react";
import { IProducts } from "@/models/product";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

const DetailProduct = ({ params }: { params: IProducts }) => {
  const [product, setProduct] = useState<IProducts | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/05e8172e-684f-494b-98f5-906e6564e8e0"
        );
        const data = await response.json();
        const foundProduct = data.find(
          (item: IProducts) => item.id === params.id
        );
        setProduct(foundProduct);
        console.log("Product:", foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    < >
      {product ? (
        <div className="h-[480px]">
          <Image
            src={product.imagen1}
            alt={`imagen de ${product.nombre}`}
            className="object-fill object-center"
            width={500}
            height={500}
            priority={true}
          />
          <div className="flex justify-center h-fit">
          <div className="bg-gray-100 shadow-lg rounded-lg w-[90%]">
          <div className="flex items-center justify-start pl-4 pb-3 mt-3">
            {[0, 1, 2, 3, 4].map((element: number) => (
              <StarIcon
                key={element}
                className={` ${
                  product.valoracion > element
                    ? "text-yellow-400 h-6 w-6"
                    : "text-gray-200 h-6 w-6"
                } h-5 w-5 flex-shrink-0
                  `}
                aria-hidden="true"
              />
            ))}
          </div>
          <h2 className="font-bold ml-4">{product.nombre}</h2>
          <p className="pl-4 pt-1 pb-2">S./ {product.precio}</p>
          <p className="pl-4">{product.descripcion}</p>
          </div>
          </div>
          <div className="flex justify-center items-center"> 
            <button className="bg-orange-300 rounded-full h-[40px] mt-2">
             <p className="text-white font-bold pl-4 pr-4"> Agregar al Carrito</p> 
            </button> 
          </div>
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DetailProduct;

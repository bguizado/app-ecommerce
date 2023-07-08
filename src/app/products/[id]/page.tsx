'use client';
import { useEffect, useState } from "react";
import { IProducts } from "@/models/product";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import Modal from "@/components/Modal";
import Link from "next/link";

const DetailProduct = ({ params }: { params: IProducts }) => {
  const [product, setProduct] = useState<IProducts | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/b3107a66-eb8c-492f-8a7b-e0d3ab628c78"
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
    <>
      {product ? (
        <div className="h-fit">
          <div className="flex justify-center">
          <Image
            src={product.imagen1}
            alt={`imagen de ${product.nombre}`}
            className="object-fill object-center"
            width={500}
            height={500}
            priority={true}
          />
          </div>
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
             <div className="flex justify-center items-center h-[75px]">      
            <button
              className="bg-orange-400 font-bold text-white rounded-xl py-2 px-6  hover:bg-orange-500"
              onClick={() => setShowModal(true)}
            >
              Agregar al carrito
            </button>
             </div> 

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <h1 className="text-3xl font-bold p-3">Exito!</h1>
              <p className="w-36 text-center text-slate-400">
                El producto fue agregado al carrito
              </p>
              <Link href={"/"}>
              <button
                className="bg-orange-400 text-white rounded-xl py-2 px-6 mt-6 mb-4 hover:bg-orange-500"
                onClick={() => setShowModal(false)}
              >
                Seguir comprando
              </button>
              </Link>
              <Link href={"/"}>
              <button
                className="text-slate-400 border-2 border-slate-300 rounded-xl py-2 px-6 hover:bg-slate-300 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                Salir
              </button>
              </Link>
            </Modal>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DetailProduct;

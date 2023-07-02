import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { IProducts } from "@/models/product";

const Cards: React.FC<{ item: IProducts }> = ({ item }) => {
  return (
    <div className="group relative border border-gray-200 shadow-lg rounded-xl p-0.5 sm:p-4">
      <div>
        <Image
          src={item.imagen1}
          alt={`imagen de ${item.nombre}`}
          className="object-fill object-center"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className="text-center">
        <h3 className="text-gray-900 h-auto sm:h-[46px]">
          <Link href={`products/${item.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {item.nombre}
          </Link>
        </h3>
        <div className="mt-1 flex flex-col items-center">
          <p className="sr-only">{`valoracion ${item.valoracion} estrellas`}</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((element: number) => (
              <StarIcon
                key={element}
                className={` ${
                  item.valoracion > element
                    ? "text-yellow-400"
                    : "text-gray-200"
                } h-5 w-5 flex-shrink-0
                  `}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm font-normal text-gray-500">{item.marca}</p>
        </div>
        <p className="mt-4 font-medium text-gray-900">
          {"S/ "}
          {item.precio}
        </p>
      </div>
    </div>
  );
};

export default Cards;

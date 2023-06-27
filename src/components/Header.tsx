import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-slate-700 h-24 w-full flex items-center ">
        <div className="pl-4 h-24 w-full flex  items-center lg:justify-end lg:w-96 2xl:justify-start 2xl:w-80 2xl:pl-0">
          <Image
            className="h-full w-full lg:h-16 lg:w-96 mb-2 2xl:h-20 2xl:w-full"
            src="../GameOnLogo.svg"
            width={1000}
            height={1000}
            alt="Logo de GameOn"
          />
        </div>
        <div className="w-40 h-24 flex justify-end space-x-3 mr-2 items-center lg:w-full 2xl:space-x-3 2xl:mr-5">
        <div className="2xl:flex 2xl:items-center 2xl:space-x-1 mt-2">
            <p className="hidden 2xl:block 2xl:text-orange-300 2xl:font-semibold 2xl:cursor-pointer 2xl:text-md">Iniciar Sesión</p>
            <Image
              className="h-8 w-8 cursor-pointer 2xl:h-10 2xl:w-10 "
              src="/User.png"
              width={500}
              height={500}
              alt="Usuario"
            />
          </div>
        <div className="2xl:flex 2xl:items-center 2xl:space-x-1.5 mt-2">
            <p className="hidden 2xl:block 2xl:text-orange-300 2xl:font-semibold 2xl:cursor-pointer 2xl:text-md " >Carrito</p>
            <Image
            className="h-6 w-6 2xl:h-8 2xl:w-8 cursor-pointer"
            src="/CarritoDeCompras.png"
            width={1000}
            height={1000}
            alt="Carrito de Compras"
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

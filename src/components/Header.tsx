import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-slate-700 h-24 w-full flex items-center ">
        <div className="pl-4 h-18 flex w-full items-center mb-1">
          <Image
            className="h-18 w-18"
            src="../GameOnLogo.svg"
            width={500}
            height={500}
            alt="Logo de GameOn"
          />
        </div>

        <div className="w-full h-18 flex justify-end space-x-5 mr-2 items-center">
          <Image
            className="h-6 w-7"
            src="/CarritoDeCompras.png"
            width={500}
            height={500}
            alt="Carrito de Compras"
          />
          <Image
            className="h-8 w-8"
            src="/User.png"
            width={500}
            height={500}
            alt="Usuario"
          />
        </div>
      </div>
    </>
  );
};

export default Header;

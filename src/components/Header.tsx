import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <header className="bg-slate-700 h-24 w-full flex justify-start ">
          <Image
            className="pl-4 h-24 w-40"
            src="../GameOnLogo.svg"
            width={500}
            height={500}
            alt="Logo de GameOn"
          />
        </header>
        <div className="flex justify-center items-center absolute w-full top-20">
          <input
            className="w-[94%] h-10 rounded-full pl-5 font-bold text-md placeholder-gray-300 shadow-md items-center"
            type="text"
            placeholder="Ingrese su búsqueda "
          />
          <Image
            className="absolute top-3 right-24 h-4 w-4"
            src="/buscador.png"
            alt="Icono de búsqueda"
            width={24}
            height={24}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import Image from "next/image";

const Buscador = () => {
  return (
    <div className="flex justify-center items-center absolute w-full top-20 lg:top-7 lg:right-28 lg:w-[65%] xl:top-7 xl:right-32 xl:w-[70%] 
    2xl:top-7 2xl:right-80 2xl:w-[62%] 2.7xl:top-7 2.7xl:right-94 2.7xl:w-[65%] 2.8xl:top-7 2.8xl:right-94 2.8xl:w-[66%]  3xl:top-7 3xl:right-94 3xl:w-[60%] desktopmd:top-7 desktopmd:right-70 
    desktopmd:w-[68%] desktopmd2:top-7 desktopmd2:right-70 desktopmd2:w-[70%] desktop:top-7 desktop:right-70 desktop:w-[70%]">
      <input
        className="w-[94%] h-10 rounded-full pl-5 font-bold text-md placeholder-gray-300 shadow-md items-center lg:w-[100%]"
        type="text"
        placeholder="Ingrese su búsqueda "
      />
      <Image
        className="absolute top-3 right-24 h-4 w-4 2xl:right-4"
        src="/buscador.png"
        alt="Icono de búsqueda"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Buscador;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Buscador from "./Buscador";

const Header = () => {
  return (
    <>
      <div>
        <div className="bg-slate-700 h-24 w-full flex items-center">
          <div className="h-24 w-full flex  items-center tablet:w-[53%] laptop:w-[34%] laptopL:w-[22%] laptopL2:w-[18%] ">
            <Link href={"/"} legacyBehavior>
              <a>
                <Image
                  className="h-full w-[200px] ml-2.5 mb-1 mobile2:h-full mobile2:w-[210px]  mobile2:mb-1 mobile2:ml-2 mobile3:w-[215px]"
                  src="../GameOnLogo.svg"
                  width={500}
                  height={500}
                  alt="Logo de GameOn"
                />
              </a>
            </Link>
          </div>
          <div className="hidden tablet:flex tablet:justify-center tablet:items-center tablet:w-full tablet:h-12">
            <input
              className="w-[94%] h-10 rounded-full pl-5 font-bold text-md placeholder-gray-300 shadow-md items-center mb-8 mobile2:w-[95%] mobile3:w-[96%] 
          tablet:mb-0 tablet:w-[100%]"
              type="text"
              placeholder="Ingrese su búsqueda"
            />
          </div>
          <div
            className="w-40 h-24 flex justify-end mr-4 space-x-2.5 items-center mobile3:space-x-2 tablet:w-[18%] laptop:w-[12%] laptopL:w-[8%]
        laptopL2:w-[8%] laptopL2:space-x-4"
          >
            <Link href={"/login"}>
                <Image
                  className="h-[35px] w-[35px] cursor-pointer mt-[11px]  mobile2:h-[36px] mobile2:w-[36px] mobile3:h-[36px] mobile3:w-[36px] laptopL2:h-[45px] laptopL2:w-[45px]"
                  src="/User.png"
                  width={500}
                  height={500}
                  alt="Usuario"
                />
            </Link>
              <Image
                className="h-[27px] w-[27px] mt-2.5 cursor-pointer mobile2:h-[28px] mobile2:w-[28px] mobile3:h-[28px] mobile3:w-[28px] laptopL2:h-[35px] laptopL2:w-[35px]"
                src="/CarritoDeCompras.png"
                width={1000}
                height={1000}
                alt="Carrito de Compras"
              />
 
          </div>
          
        </div>
        <div className="flex justify-center items-center w-full h-[30px] tablet:hidden laptop:hidden">
        <input
          className="w-[94%] h-10 rounded-full pl-5 font-bold text-md placeholder-gray-300 shadow-md items-center mb-[22px] mobile2:w-[95%] mobile3:w-[96%] tablet:mb-0 "
          type="text"
          placeholder="Ingrese su búsqueda "
        />
        <Image
          className="absolute top-24 right-8 h-4 w-4"
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

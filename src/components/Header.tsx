import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="bg-slate-700 h-24 w-full flex items-center  ">
        <div className="pl-4 h-24 w-full flex  items-center  tablet:mr-10 laptop:ml-[200px] tablet1004:mr-96 2.5xl:ml-2 2.7xl:ml-2 3xl:ml-2 desktopmd:ml-2 lg:justify-end lg:w-96 2xl:justify-start 2xl:w-80 2xl:pl-0  ">
          <Link href={"/"}>
            <Image
              className="h-full w-full mb-2 mobile2:h-16  mobile2:mr-11 mobile3:mr-24 desktop-minimizar:mr-80 tablet-mitad:mr-80 tablet:mr-96 desktopmd:ml-0 lg:h-16 lg:w-96 2xl:h-20 2xl:w-full"
              src="../GameOnLogo.svg"
              width={1000}
              height={1000}
              alt="Logo de GameOn"
            />
          </Link>
        </div>
        <div className="w-40 h-24 flex justify-end space-x-3 mr-5 items-center mobile2:mr-5 lg:w-full 2xl:space-x-3 2xl:mr-5">
          <Link href={"/login"}>
            <div className="2xl:flex 2xl:items-center 2xl:space-x-1 mt-2">
              <p className="hidden 2xl:block 2xl:text-orange-300 2xl:font-semibold 2xl:cursor-pointer 2xl:text-md">
                Iniciar Sesión
              </p>
              <Image
                className="h-8 w-8 cursor-pointer tablet:h-10 tablet:w-10 2xl:h-10 2xl:w-10"
                src="/User.png"
                width={500}
                height={500}
                alt="Usuario"
              />
            </div>
          </Link>
          <div className=" 2xl:flex 2xl:items-center 2xl:space-x-1.5 mt-2">
            <p className="hidden 2xl:block 2xl:text-orange-300 2xl:font-semibold 2xl:cursor-pointer 2xl:text-md">
              Carrito
            </p>
            <Image
              className="h-6 w-6 tablet:h-8 tablet:w-8 laptop:h-8 laptop:w-8 cursor-pointer"
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

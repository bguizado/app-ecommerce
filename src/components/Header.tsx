import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-slate-700 h-24 w-full flex justify-start ">
        <Image
          className="pl-4 h-24 w-40"
          src="../GameOnLogo.svg"
          width={500}
          height={500}
          alt="Logo de GameOn"
        />
      </div>
    </>
  );
};

export default Header;

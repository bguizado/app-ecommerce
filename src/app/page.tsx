import React from "react";
import Carritocompras from "../components/Carritocompras"
import {getProducts} from "../api/api"
import Preciocarrito from "@/components/preciocarrito";

const Home = () => {
  return (
    <div className='p-0 w-auto h-4/5'>
      {/* ver si se puede aplicar flex-1 al contenido y al body colocarle flex  y quitar ese p-*/}
      
      { <Preciocarrito/>}
      
      
       
      

    </div>
  )
}

export default Home

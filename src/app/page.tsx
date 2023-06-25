import React from "react";
import Carritocompras from "../components/Carritocompras"
const Home = () => {
  return (
    <div className='p-0 w-screen h-4/5'>
      {/* ver si se puede aplicar flex-1 al contenido y al body colocarle flex  y quitar ese p-*/}
      { <Carritocompras/> }
      { <Carritocompras/> }
      { <Carritocompras/> }
      

    </div>
  )
}

export default Home

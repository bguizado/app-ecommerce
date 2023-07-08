"use client"
import { CarritoReducer, carritoInitialState } from "@/app/Reducers/CarritoReducers";
import { useState, useEffect } from "react";
import {useReducer} from "react";
export const addToCard = () => { console.log ()}
export const delToCard = () => {}

function Carritocompras() {
 const [state, dispatch] = useReducer(CarritoReducer,carritoInitialState);  
 const {products , cart} = state ;
  const [numpro , setnumpro] = useState(1);
  /*const addToCard = () => {}
  const delToCard = () => {}  (NO SE SI VAYA AQUI O ARRIBA)*/

  /*const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/05e8172e-684f-494b-98f5-906e6564e8e0');
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(productList); // Muestra los productos en la consola */


  function Restar () { if(numpro>1) return setnumpro(numpro-1)}
  return (

    <div className=" flex flex-shrink-0  border-b-2 border-b-gray-300 justify-around items-center box-content max-w-full"> 
     <img src="https://i.ibb.co/1dhTSKZ/167520951358224.jpg"
       alt="" className="w-28 h-24 items-center  inline-block"/>
      <div className="">
        <h2 className="text-lg tex-neutral-500 justify-center w-35 text-[#99A4AC] flex-nowrap font-bold">Monitor Benq EL2870U</h2>
        <p className="tex-sm w-30 h-8"> S./ 2000.30</p>
      </div>
      
      <div className="flex-col items-baseline">
        <button className="text-2xl w-3.5 h-9 b-2 text-center font-normal " onClick={()=> { setnumpro (numpro +1)}} >
        +
        </button> 
        <div className="flex">
          {/*en el parrafo modificar tamaño de letra recomendado 0.925rem*/}
        <p className="text-lg font-normal text-center w-4 mr-1">
          {numpro}
        </p> 
        <button className="ml-4" onClick={()=> { alert("El producto ha sido eliminado")}}> <svg className="h-6 w-6 text-red-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
</svg>
</button>
        </div> 
        <button className="text-2xl w-3 h-9 text-center font-normal" onClick={Restar}>
          -
        </button>
      </div>
    </div>
    
  )
}


export default Carritocompras
'use client'
import { IProducts } from "@/models/product";
import DetalleProducto from "@/components/DetalleProducto";
import React, { useEffect, useState } from 'react';
import { getProducts } from "@/api/api";
import Link from "next/link";

const Detail = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        console.log(products); // Imprimir el resultado del JSON en la consola
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchData();
  }, []); 


  return (
    <>  
    <div className="h-[500px] w-full bg-red-300">
     
    </div> 
    </>
  );
}

export default Detail;
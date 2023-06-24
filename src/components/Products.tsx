import React from "react";
import { getProducts } from "../api/api";
import { IProducts } from "@/models/product";
import { Cards } from "@/components/Cards";

export async function Products() {
  const products = await getProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="mt-10">Ofertas del día</h2>
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">        
          {products.map((product: IProducts) => {
            return (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            );
          })}
        </div>
        <h2 className="mt-10">Productos recomendados</h2>
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: IProducts) => {
            return (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            );
          })}
        </div>
        <h2 className="mt-10">Productos destacados</h2>
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: IProducts) => {
            return (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
import React from "react";
import { getProducts } from "../api/api";
import { IProducts } from "@/models/product";
import { Cards } from "@/components/Cards";

export async function Products() {
  const products = await getProducts();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="mt-10">Productos en oferta</h2>
        <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter(
              (product: IProducts) => product.tipos.at(0).clase === "oferta"
            )
            .map((product: IProducts) => (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            ))}
        </div>
        <h2 className="mt-10">Productos recomendados</h2>
        <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter(
              (product: IProducts) =>
                product.tipos.at(0).clase === "recomendado"
            )
            .map((product: IProducts) => (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            ))}
        </div>
        <h2 className="mt-10">Productos destacados</h2>
        <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter(
              (product: IProducts) => product.tipos.at(0).clase === "destacado"
            )
            .map((product: IProducts) => (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

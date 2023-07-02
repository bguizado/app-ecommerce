"use client";

import { getProducts } from "../api/api";
import { IProducts } from "@/models/product";
import { Cards } from "@/components/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export async function Products() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          speed: 500,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          speed: 500,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 500,
          arrows: false,
        },
      },
    ],
  };

  const products = await getProducts();
  return (
    <section className="bg-white">
      <div>
        <h2 className="mt-10 ml-2 mb-3 font-bold text-xl sm:text-3xl text-[#99A4AC]">
          Productos en oferta
        </h2>
        <Slider {...settings}>
          {products
            .filter(
              (product: IProducts) => product.tipos.at(0).clase === "oferta"
            )
            .map((product: IProducts) => (
              <div key={product.id}>
                <Cards item={product} />
              </div>
            ))}
        </Slider>
        <h2 className="mt-10 ml-2 mb-3 font-bold text-xl sm:text-3xl text-[#99A4AC]">
          Productos recomendados
        </h2>
        <Slider {...settings}>
          {products
            .filter(
              (product: IProducts) =>
                product.tipos.at(0).clase === "recomendado"
            )
            .map((product: IProducts) => (
              <div key={product.id}>
                <Cards item={product} />
              </div>
            ))}
        </Slider>
        <h2 className="mt-10 ml-2 mb-3 font-bold text-xl sm:text-3xl text-[#99A4AC]">
          Productos destacados
        </h2>
        <Slider {...settings}>
          {products
            .filter(
              (product: IProducts) => product.tipos.at(0).clase === "destacado"
            )
            .map((product: IProducts) => (
              <div className="mb-20 " key={product.id}>
                <Cards item={product} />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}

export default Products;

'use client'

import { getProducts } from "../api/api";
import { IProducts } from "@/models/product";
import { Cards } from "@/components/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export async function Products() {
  
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    };

  const products = await getProducts();
  return (
    <section className="bg-white">
      <div>
        <h2 className="mt-10">Productos en oferta</h2>
        <Slider {...settings}>
        {/* <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"> */}
          {products
            .filter(
              (product: IProducts) => product.tipos.at(0).clase === "oferta"
            )
         .map((product: IProducts) => (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            ))}
        {/* </div> */}
        </Slider>
        {/* <h2 className="mt-10">Productos recomendados</h2>
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
        </div> */}
      </div>
    </section>
  );
}

export default Products;
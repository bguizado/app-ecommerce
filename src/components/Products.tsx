
import { IProducts } from "@/models/product";
import Cards from "@/components/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import Link from "next/link";

type ProductsProps = {
  filterCategory: string;
};

export const Products = ({ filterCategory }: ProductsProps) => {
  
  const [products, setProducts] = useState<any[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/b3107a66-eb8c-492f-8a7b-e0d3ab628c78");
        const data = await response.json();
        setProducts(data);
        console.log('Respuesta del API:', data);
      } catch (error) {
        console.error('Error al obtener los datos del API:', error);
      }
    };

    fetchData();
  }, []);


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

  return (
    <section className="bg-white">
      <div>
        <h2 className="ml-2 mb-3 font-bold text-xl sm:text-3xl text-[#99A4AC]">
          Productos en oferta
        </h2>
        <Slider {...settings}>
          {products
            .filter((product: IProducts) => {
              if (filterCategory === '') {
                return product.tipos[0].clase === "oferta";
              } else if (filterCategory === 'Todos') {
                return (
                  product.tipos[0].clase === "oferta" 
                );
              } else {
                return (
                  product.tipos[0].clase === "oferta" &&
                  product.tipos[0].categoria === filterCategory
                );
              }
            })
            .map((product: IProducts) => {
              return (
                <div key={product.id}>
                  <Cards item={product} />
                </div>
              );
            })}
        </Slider>
        <h2 className="mt-10 ml-2 mb-3 font-bold text-xl sm:text-3xl text-[#99A4AC]">
          Productos recomendados
        </h2>
        <Slider {...settings}>
          {products
            .filter((product: IProducts) => {
              if (filterCategory === '') {
                return product.tipos[0].clase === "recomendado";
              } else if (filterCategory === 'Todos') {
                return (
                  product.tipos[0].clase === "recomendado" 
                );
              } else {
                return (
                  product.tipos[0].clase === "recomendado" &&
                  product.tipos[0].categoria === filterCategory
                );
              }
            })
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
            .filter((product: IProducts) => {
              if (filterCategory === '') {
                return product.tipos[0].clase === "destacado";
              } else if (filterCategory === 'Todos') {
                return (
                  product.tipos[0].clase === "destacado" 
                );
              } else {
                return (
                  product.tipos[0].clase === "destacado" &&
                  product.tipos[0].categoria === filterCategory
                );
              }
            })
            .map((product: IProducts) => (
              <div className="mb-20" key={product.id}>
                <Cards item={product} />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}

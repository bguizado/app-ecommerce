'use client'
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBotones from '@/components/HeaderBotones'
import { IProducts } from '@/models/product';
import {Products} from "@/components/Products";
import UsuarioMiniMenu from '@/components/UsuarioMiniMenu';

const Home = () => {
  const [filterCategory, setFilterCategory] = useState('');

  const handleClickCategory = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <>
      <section className="flex w-full h-[62px] overflow-x-auto  items-center tablet:justify-center laptop:justify-center">
        <div className="flex space-x-3 ml-2">
          <HeaderBotones
            text="Todos"
            className={filterCategory === '' ? 'bg-orange-300 text-white w-20' : 'bg-gray-300 text-gray-500 w-20'}
            onClick={() => handleClickCategory('')}
          />
          <HeaderBotones
            text="Monitores"
            className={filterCategory === 'Monitores' ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
            onClick={() => handleClickCategory("Monitores")}
          />
          <HeaderBotones
            text="Perifericos"
            className={filterCategory === 'Perifericos' ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
            onClick={() => handleClickCategory("Perifericos")}
          />
           <HeaderBotones
            text="Laptop"
            className={filterCategory === 'Laptop' ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
            onClick={() => handleClickCategory("Laptop")}
          />
           <HeaderBotones
            text="Componentes"
            className={filterCategory === 'Componentes' ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
            onClick={() => handleClickCategory("Componentes")}
          />
        </div>
      </section>
      <main>
        <Products filterCategory={filterCategory}/>
      </main>
    </>
  );
};

export default Home;





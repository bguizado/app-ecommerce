'use client'

import React,{ useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBotones from '@/components/HeaderBotones'
import Buscador from '@/components/Buscador'
import Products from "@/components/Products";

const Home = () => {
  const [isTodosClicked, setIsTodosClicked] = useState(true);
  const [isMonitoresClicked, setIsMonitoresClicked] = useState(false);
  const [isPerifericosClicked, setIsPerifericosClicked] = useState(false);
  const [isTecladosClicked, setIsTecladosClicked] = useState(false);
  const [isParlantesClicked, setIsParlantesClicked] = useState(false);
  const [isLaptopsClicked, setIsLaptopsClicked] = useState(false);

  const handleClickTodos = () => {
    setIsTodosClicked(true);
    setIsMonitoresClicked(false);
    setIsPerifericosClicked(false);
    setIsTecladosClicked(false);
    setIsParlantesClicked(false);
    setIsLaptopsClicked(false);
  };

  const handleClickMonitores = () => {
    setIsTodosClicked(false);
    setIsMonitoresClicked(true);
    setIsPerifericosClicked(false);
    setIsTecladosClicked(false);
    setIsParlantesClicked(false);
    setIsLaptopsClicked(false);
  };

  const handleClickPerifericos = () => {
    setIsTodosClicked(false);
    setIsMonitoresClicked(false);
    setIsPerifericosClicked(true);
    setIsTecladosClicked(false);
    setIsParlantesClicked(false);
    setIsLaptopsClicked(false);
  };

  const handleClickTeclados = () => {
    setIsTodosClicked(false);
    setIsMonitoresClicked(false);
    setIsPerifericosClicked(false);
    setIsTecladosClicked(true);
    setIsParlantesClicked(false);
    setIsLaptopsClicked(false);
  };
  const handleClickParlantes = () => {
    setIsTodosClicked(false);
    setIsMonitoresClicked(false);
    setIsPerifericosClicked(false);
    setIsTecladosClicked(false);
    setIsParlantesClicked(true);
    setIsLaptopsClicked(false);
  };
  const handleClickLaptops = () => {
    setIsTodosClicked(false);
    setIsMonitoresClicked(false);
    setIsPerifericosClicked(false);
    setIsTecladosClicked(false);
    setIsParlantesClicked(false);
    setIsLaptopsClicked(true);
  };
  return (
    <>
    <Buscador/> 
    <section className="flex w-full h-20 items-end lg:h-18 tablet:h-14 ">
    <div className="flex w-full mb-3 overflow-x-auto ml-3 desktop-minimizar:mb-0 tablet-670:mb-2 desktop-minimizar:overflow-x-auto tablet:justify-center 
    laptop:mb-3 laptop:justify-center" >
     <div className="flex space-x-3">
        <HeaderBotones text="Todos" className={isTodosClicked ? 'bg-orange-300 text-white w-20' : 'bg-gray-300 text-gray-500 w-20'}
          onClick={handleClickTodos}/>
        <HeaderBotones text="Monitores"  className={isMonitoresClicked ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
          onClick={handleClickMonitores}/>
        <HeaderBotones
          text="Periféricos"
          className={isPerifericosClicked ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
          onClick={handleClickPerifericos}
        />
        <HeaderBotones
          text="Teclados"
          className={isTecladosClicked ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
          onClick={handleClickTeclados}
        />
         <HeaderBotones
          text="Parlantes"
          className={isParlantesClicked ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
          onClick={handleClickParlantes}
        />
         <HeaderBotones
          text="Laptops"
          className={isLaptopsClicked ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
          onClick={handleClickLaptops}
        />
    </div>
    </div>
    </section>
    <main>
      <Products />
    </main>
    </>

  )
}

export default Home





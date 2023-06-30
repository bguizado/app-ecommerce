'use client'

import React,{ useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBotones from '@/components/HeaderBotones'
import Buscador from '@/components/Buscador'

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
    <div className='pl-5 pr-5 pb-5'>
      {/* ver si se puede aplicar flex-1 al contenido y al body colocarle flex  y quitar ese p-*/}
      {<p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae iste eos quisquam nam magnam. Inventore culpa, facere cum distinctio dolorum saepe est molestias, placeat animi, impedit repellat aliquid asperiores? Mollitia.
        Sit rem neque iste, tenetur veritatis assumenda accusamus cum tempora. Eveniet soluta labore ad sapiente harum asperiores, autem sint mollitia at nemo consequuntur fuga doloribus commodi qui possimus consequatur porro!
        Ipsam ab rem voluptatibus corporis inventore nihil distinctio doloremque quod, consequatur quasi tempora architecto laudantium quis nobis. Ab laudantium suscipit cupiditate sint unde amet nulla eligendi, aliquid temporibus esse ducimus.
        Sunt atque labore assumenda dolor in, eius cumque doloribus voluptatibus quas aspernatur explicabo repellat nihil quos libero at error recusandae tempore neque itaque! Dolore perferendis eum ullam rem, officiis eos!
        Nobis, consequuntur nesciunt voluptas rerum sequi quae nisi minus, tempora exercitationem repellendus praesentium accusamus minima! Nisi optio officia, doloremque et, sit quidem dolorum eaque accusantium adipisci quod tempora amet. Provident?
        Nam tempora eaque voluptatem asperiores ab? Voluptates fuga ullam vero cupiditate quos praesentium ea ipsum nemo fugit mollitia, cum rem? Deserunt veniam sunt inventore ad. Perferendis expedita praesentium cum incidunt!
        Nam tempora eaque voluptatem asperiores ab? asdfasdf
      </p>}
    </div>
    </>
  )
}

export default Home





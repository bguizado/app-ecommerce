'use client'

import React,{ useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBotones from '@/components/HeaderBotones'

const Home = () => {
  const [isMonitoresClicked, setIsMonitoresClicked] = useState(false);

  const handleClickMonitores = () => {
    setIsMonitoresClicked(true);
  };
  return (
    <>
    <section className="flex w-full h-20 items-end">
    <div className="flex w-full mb-2 overflow-x-auto ml-3">
     <div className="flex space-x-3">
        <HeaderBotones text="Todos" className={isMonitoresClicked ? 'bg-gray-300 text-gray-500 w-20' : 'bg-orange-300 text-white w-20'} onClick={handleClickMonitores}/>
        <HeaderBotones text="Monitores"  className={isMonitoresClicked ? 'bg-orange-300 text-white w-24' : 'bg-gray-300 text-gray-500 w-24'}
          onClick={handleClickMonitores}/>
    </div>
    </div>
    </section>
    <div className='p-5'>
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





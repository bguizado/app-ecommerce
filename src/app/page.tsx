import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-gray-300 h-screen w-screen">
      <header className="bg-slate-700 h-24 w-full flex justify-start "> 
      <Image className='pl-4 mt-4 h-14 w-32' src="/GameOnLogo.png"  width={100} height={100} alt="Logo de GameOn"/>
      </header>
      <div className='flex justify-center absolute w-full top-20'>
        <input className='w-200 h-10 rounded-full pl-5' type="text" placeholder='Ingrese su búsqueda' /> 
      </div>
    </div>
  )
}

export default page





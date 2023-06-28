import { log } from 'console'
import Link from 'next/link'
import React, { FC, ReactElement } from 'react'

interface Props {
    facebook: ReactElement,
    instagram: ReactElement,
    youtube: ReactElement,
    twitter: ReactElement,
    alipay: ReactElement,
    paypal: ReactElement
    stripe: ReactElement
}

const Footer: FC<Props> = ({facebook, instagram, youtube, twitter, alipay, paypal, stripe }) => {
    return (
        <>
            <div className="bg-slate-700 w-full flex flex-col md:justify-center py-5 h-4/5">
                <ul className='flex flex-col md:m-auto md:flex-row md:justify-between'>
                    <li className='p-5'>
                        <h5 className='text-sky-600 font-bold text-lg'>GARANTÍAS</h5>
                        <p className='text-xs my-2 text-white '>Términos y Condiciones</p>
                        <p className='text-xs my-2 text-white '>Politica de privacidad</p>
                        <p className='text-xs mb-4 text-white md:my-2'>Reclamos</p>
                    </li>
                    <li className='p-5'>
                        <h5 className='text-sky-600 font-bold text-lg'>ACERCA DE NOSOTROS</h5>
                        <p className='text-xs my-2 text-white '>Nuestras Redes Sociales</p>
                        <p className='text-xs my-2 text-white '>Nuestros Locales</p>
                        <p className='text-xs my-2 text-white '>Sobre Nosotros</p>
                        <div className='flex w-36 justify-between my-4'>
                            <Link href={"/"}>{facebook}</Link>
                            <Link href={"/"}>{youtube}</Link>
                            <Link href={"/"}>{instagram}</Link>
                            <Link href={"/"}>{twitter}</Link>
                        </div>
                    </li>
                    <li className='p-5'>
                        <h5 className='text-sky-600 font-bold text-lg'>UBÍCANOS</h5>
                        <p className='text-xs my-2 text-white '>Av. San Martín No. 100 - 2</p>
                        <p className='text-xs my-2 text-white '>Barrio San Martín Centro de Lima</p>
                        <p className='text-xs my-2 text-white '>Está página permite pagos online con:</p>
                        <p className='text-xs my-2 text-white '>+51 999 999 999</p>
                        <div className='flex w-36 justify-between my-4'>
                            <Link href={"/"}>{alipay}</Link>
                            <Link href={"/"}>{paypal}</Link>
                            <Link href={"/"}>{stripe}</Link>
                        </div>
                    </li>
                    <li className='p-5'>
                        <h5 className='text-sky-600 font-bold text-lg'>CONTACTOS</h5>
                        <p className='text-xs my-2 text-white '>stefano@ventasperu.com</p>
                        <p className='text-xs my-2 text-white '>brando@ventasperu.com</p>
                        <p className='text-xs my-2 text-white '>anderson@ventasperu.com</p>
                        <p className='text-xs my-2 text-white '>jesus@ventasperu.com</p>
                        <p className='text-xs my-2 text-white '>julio@ventasperu.com</p>
                        <p className='text-xs my-2 text-white '>carlos@ventasperu.com</p>
                    </li>
                    <li className='p-5'>
                        <h5 className='text-sky-600 font-bold text-lg'>NEWSLETTER</h5>
                        <div className='flex flex-col h-24 justify-around mt-2'>
                            <input className='w-64 h-10 text-white bg-slate-700 rounded-sm text-sm px-3 py-2 border  outline-none ' type="email" name="" id="" placeholder='Ingresa tu correo electrónico' />
                            <button className='w-64 h-10 font-bold text-white text-sm rounded-sm bg-orange-500 hover:bg-orange-400'>Subscribete</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h5 className='h-14 p-4 text-sm text-white flex  items-center justify-center md:justify-end bg-slate-600'>Copyright © 2023 GameOn - Todos los derechos reservados</h5>
            </div>
        </>

    )
}

export default Footer
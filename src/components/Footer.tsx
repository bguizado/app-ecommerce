import { log } from 'console'
import Link from 'next/link'
import React, { FC, ReactElement } from 'react'

interface Props {
    home: ReactElement,
    list: ReactElement,
    cart: ReactElement,
    login: ReactElement,
    facebook: ReactElement,
    instagram: ReactElement,
    youtube: ReactElement,
    twitter: ReactElement,
    alipay: ReactElement,
    paypal: ReactElement
    stripe: ReactElement
}

const Footer: FC<Props> = ({ home, list, cart, login, facebook, instagram, youtube, twitter, alipay, paypal, stripe }) => {
    return (
        <div className="bg-stone-100 w-full flex justify-center py-5 h-4/5 mt-auto">
            <ul className='w-4/5 flex justify-between'>
                <li className='hidden md:block'>
                    <h5 className='text-slate-700 font-bold text-lg'>GARANTÍAS</h5>
                    <p className='text-xs my-2'>Términos y Condiciones</p>
                    <p className='text-xs my-2'>Politica de privacidad</p>
                    <p className='text-xs my-2'>Reclamos</p>
                </li>
                <li className='hidden md:block'>
                    <h5 className='text-slate-700 font-bold text-lg'>ACERCA DE NOSOTROS</h5>
                    <p className='text-xs my-2'>Nuestras Redes Sociales</p>
                    <p className='text-xs my-2'>Nuestros Locales</p>
                    <p className='text-xs my-2'>Sobre Nosotros</p>
                    <div className='flex w-36 justify-between my-2'>
                        <Link href={"/"}>{facebook}</Link>
                        <Link href={"/"}>{youtube}</Link>
                        <Link href={"/"}>{instagram}</Link>
                        <Link href={"/"}>{twitter}</Link>
                    </div>
                </li>
                <li className='hidden md:block'>
                    <h5 className='text-slate-700 font-bold text-lg'>UBÍCANOS</h5>
                    <p className='text-xs my-2'>Av. San Martín No. 100 - 2</p>
                    <p className='text-xs my-2'>Barrio San Martín Centro de Lima</p>
                    <p className='text-xs my-2'>Está página permite pagos online con:</p>
                    <p className='text-xs my-2'>+51 999 999 999</p>
                    <div className='flex w-36 justify-between my-4'>
                        <Link href={"/"}>{alipay}</Link>
                        <Link href={"/"}>{paypal}</Link>
                        <Link href={"/"}>{stripe}</Link>
                    </div>
                </li>
                <li className='hidden md:block'>
                    <h5 className='text-slate-700 font-bold text-lg'>CONTACTOS</h5>
                    <p className='text-xs my-2'>stefano@ventasperu.com</p>
                    <p className='text-xs my-2'>brando@ventasperu.com</p>
                    <p className='text-xs my-2'>anderson@ventasperu.com</p>
                    <p className='text-xs my-2'>jesus@ventasperu.com</p>
                    <p className='text-xs my-2'>julio@ventasperu.com</p>
                    <p className='text-xs my-2'>carlos@ventasperu.com</p>
                </li>
                <li className='md:hidden'>
                    <Link href="/">{home}</Link>
                </li>
                <li className='md:hidden'>
                    <Link href="/">{list}</Link>
                </li>
                <li className='md:hidden'>
                    <Link href="/">{cart}</Link>
                </li>
                <li className='md:hidden'>
                    <Link href="/">{login}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
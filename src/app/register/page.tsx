import React from 'react'
import Link from 'next/link'


export default function Register() {
  return (
    <div className="min-h-full flex items-center justify-center mt-30 py-12 sm:px-6 lg:px-8 text-gray-500">
        <div>
        <h1 className="mt-4 mb-20 text-center font-bold text-3xl">Registrate</h1>
        <form>
        <div>
            <div>
                <input type="name" className="w-full max-w-xs appearence-none px-3 py-2 border-2 rounded mb-10" placeholder="Nombre completo"/>
            </div>
            <div>
                <input type="email" className="w-full max-w-xs appearence-none px-3 py-2 border-2 rounded mb-10" placeholder="E-mail"/>
            </div>
            <div>
                <input type="number" className="w-full max-w-xs appearence-none px-3 py-2 border-2 rounded mb-10" placeholder="Celular"/>
            </div>
            <div>
                <input type="password" className="w-full max-w-xs appearence-none px-3 py-2 border-2 rounded mb-10" placeholder="Contraseña"/>
            </div>
            <div>
                <input type="password" className="w-full max-w-xs appearence-none px-3 py-2 border-2 rounded mb-10" placeholder="Confirmar contraseña"/>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-orange-400 text-white rounded-2xl py-1 px-6 mt-6 mb-4">Registrate</button>
            </div>
        </div>
    </form>
        </div>
    </div>
  )
}

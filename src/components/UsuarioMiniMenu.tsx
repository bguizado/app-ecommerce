"use client"
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Register from "@/app/register/page";
import LoginForm from "./LoginForm";


const UsuarioMiniMenu = () => {
    const [expandir, setExpandir] = useState(false);
    const [estado, setEstado] = useState<any | null>(null);
    const [usuarioLogeado, setUsuarioLogeado] = useState(null);
    const router = useRouter() //Para navegar 

    
    useEffect(() => {
        const logeado = localStorage.getItem('logeado')
          if(logeado){
             setEstado(JSON.parse(localStorage.getItem('logeado')))
          }    
        //window.addEventListener('storage', () => setEstado(localStorage.getItem('logeado')));
    }, [localStorage.getItem('logeado')]);

    useEffect(() => {
        const usuarioLogeado = localStorage.getItem('usuario')
        setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario')))
   }, []);

   //Para debug
    console.log(estado)
    console.log(usuarioLogeado)


    //Action cuando usuario da click a Logout del mini Menu
    const logout = (e:any) =>{
        e.preventDefault();
        localStorage.setItem("logeado", "false");
        setEstado(false)
        router.push('/login')
        setExpandir(false)
    }

    //Action cuando usuario da click a Iniciar Session del mini Menu
    const login = (e:any) =>{
        e.preventDefault();
        router.push('/login')
        setExpandir(false)
    }
    //Action cuando usuario da click a Registrar del mini Menu
    const register = (e:any) =>{
        e.preventDefault();
        router.push('/register')
        setExpandir(false)

    }

  return (
    <>
      <div className="laptopL2:flex laptopL2:items-center laptopL2:space-x-1 mt-2">
      <div className="relative">
            <Image
                onClick={()=>setExpandir(!expandir)}
                className="h-[35px] w-[35px] cursor-pointer mt-0.5  mobile2:h-[36px] mobile2:w-[36px] mobile3:h-[36px] mobile3:w-[36px]"
                src="/User.png"
                width={500}
                height={500}
                alt="Usuario"
            />
            {expandir &&  (estado ===true) &&(
                    <div className="menu-expandir bg-slate-700 absolute top-14 right-0">
                    <ul>
                        <li className="p-2 text-sm text-gray-300">Bienvenidos, {usuarioLogeado.name}</li>
                        <li className="p-2 text-sm text-gray-300 hover:bg-slate-800" onClick={logout}>Cerrar Session</li>
                                              
                    </ul>
                    </div>
                )
            }{expandir &&  (estado ===false||null) &&(
                <div className="menu-expandir bg-slate-700 absolute top-14 right-0">
                <ul>
                    <li className="p-2 text-sm text-gray-300">Bienvenidos!</li>
                    <li className="p-2 text-sm text-gray-300 hover:bg-slate-800" onClick={login}>Iniciar Session</li>
                    <li className="p-2 text-sm text-gray-300 hover:bg-slate-800" onClick={register}>Registrate</li>                        
                </ul>
                </div>
            )
        }
        </div>
    </div>
    </>       
    
  );
};

export default UsuarioMiniMenu;


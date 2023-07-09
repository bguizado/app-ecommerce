"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { useRouter } from 'next/navigation'


const LoginForm = () => {
    const router = useRouter()
    const [estado, setEstado] = useState<any | null>(null);
    useEffect(() => {
        const logeado = localStorage.getItem('logeado')
          if(logeado){
             setEstado(JSON.parse(logeado))
          }    
        //window.addEventListener('storage', () => setEstado(localStorage.getItem('logeado')));
    }, []);


    const [inputUsuario, setInputUsuario] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e:any) =>{
        e.preventDefault();
        const usuarioLogeado = JSON.parse(localStorage.getItem('usuario')!);

        if(inputUsuario.email === usuarioLogeado.email &&
            inputUsuario.password === usuarioLogeado.password){
                localStorage.setItem("logeado", "true");
                router.push('/')
                setEstado(true);
            }
            else{
                alert("Correo o contraseña incorrecto")
            }
    }
    const logout = (e:any) =>{
        e.preventDefault();
        localStorage.setItem("logeado", "false");
        setEstado(false)
        router.push('/login')
    }

  return (
    
    <div className="min-h-full flex items-center justify-center mt-30 py-12 sm:px-6 lg:px-8 text-gray-500">
    <div>
        {(estado ===false||null)&&(
    <><h1 className="mt-4 mb-20 text-center font-bold text-3xl">Iniciar Sesión</h1><form onSubmit={handleLogin}>
                      <div>
                          <div>
                              <input
                                  type="email"
                                  name="email"
                                  value={inputUsuario.email}
                                  onChange={(e: any) => setInputUsuario({
                                      ...inputUsuario,
                                      [e.target.name]: e.target.value
                                  })}
                                  className="w-full max-w-xs appearence-none px-3 py-2 border-2 rounded mb-10"
                                  placeholder="E-mail o Celular" />
                          </div>
                          <div>
                              <input
                                  type="password"
                                  name="password"
                                  value={inputUsuario.password}
                                  onChange={(e: any) => setInputUsuario({
                                      ...inputUsuario,
                                      [e.target.name]: e.target.value
                                  })}
                                  className="w-full max-w-xs appearence-none px-3 py-2 border-2 rounded mb-10"
                                  placeholder="Contraseña" />
                          </div>
                          <div className="flex items-center justify-center">
                              <button className="bg-orange-400 text-white rounded-2xl py-1 px-6 mt-6 mb-4">Iniciar Sesión</button>
                          </div>
                      </div>
                  </form><p className="mt-6 text-center text-sm"><Link className="underline" href="/forgot-password">¿Olvidaste tu contraseña?</Link></p><p className="mt-6 text-center text-sm">¿No tienes una cuenta? <Link className="text-orange-400 underline" href="/register">Registrate</Link></p></>
                  )}

                  {(estado ===true)&&(
                    <>
                    <h1 className="mt-4 mb-20 text-center font-bold text-3xl">Cuenta</h1>
                        <div className="flex items-center justify-center">
                              <button className="bg-orange-400 text-white rounded-2xl py-1 px-6 mt-6 mb-4" onClick={logout}>Cerrar Session</button>
                          </div>
                    </>
                  )}
    </div>
</div>

  );
};

export default LoginForm;

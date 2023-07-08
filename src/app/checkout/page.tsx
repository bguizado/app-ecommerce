'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const targetElement = event.target as HTMLElement;
            if (showPopup && targetElement && !targetElement.closest('.popup-content')) {
                setShowPopup(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showPopup]);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="flex items-center justify-center w-screen">
            <div className='flex flex-col bg-stone-50 h-full md:h-[80vh] md:w-[650px] md:rounded-3xl'>
                <div className='justify-center w-full mt-7 border-b border-stone-300'>
                    <div className="p-6">
                        <p className="text-gray-700 text-base font-semibold pb-2">Dirección de entrega</p>
                        <input className='w-full h-10 rounded-full pl-5' type="text" value='Av. Carlos Izaguirre 192 - Los Olivos' readOnly />
                    </div>
                </div>
                <div className="flex justify-center items-center w-full border-b border-stone-300">
                    <div id="card" className="relative w-80 h-56 rounded-2xl mt-7 mb-7 font-mono text-white overflow-hidden cursor-pointer">
                        <div className="top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr from-blue-900 to-gray-700 z-20">
                            <div className="flex justify-between items-center">
                                {/* <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt='Smart card' className="w-12" /> */}
                                <Image className="w-12" src="/chip.png" width={1000} height={1000} alt="Chip" />
                                <Image className="w-12" src="/visa.png" width={1000} height={1000} alt="Visa" />
                                {/* <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" alt='Smart card' className="w-12" />
                            <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="Visa image" className="w-12" /> */}
                            </div>
                            <div className="">
                                <label className="hidden">Card Number</label>
                                <input className="outline-none w-full bg-transparent text-center text-2xl" type="text" id="" value="1234 **** **** 9876" readOnly />
                            </div>
                            <div className="w-full flex flex-row justify-between font-semibold">
                                <div className="w-full flex flex-col">
                                    <label>Titular</label>
                                    <input className="outline-none bg-transparent" type="text" id="" value="Kuto Guadalupe" readOnly />
                                </div>
                                <div className="w-1/4 flex flex-col">
                                    <label className="text-right">Vence</label>
                                    <input className="outline-none bg-transparent text-right" type="text" id="" value="10/28" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='justify-center w-full border-b border-stone-300' >
                    <div className="p-6">
                        <div className="w-full flex flex-row justify-between">
                            <div className="w-full flex flex-col">
                                <label className="mb-2">Fecha de entrega:</label>
                                <label>Delibery:</label>
                            </div>
                            <div className="w-1/3 flex flex-col">
                                <input className="outline-none bg-transparent mb-2 text-right" type="text" id="" value="05/06/2023" readOnly />
                                <input className="outline-none bg-transparent text-right" type="text" id="" value="S./ 0.00" readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='justify-center w-full rounded-b-3xl shadow-xl pb-4'>
                    <div className="p-6">
                        <div className="w-full flex flex-row justify-between text-lg font-semibold">
                            <div className="w-full flex flex-col">
                                <label>Total a Pagar:</label>
                            </div>
                            <div className="w-1/3 flex flex-col">
                                <input className="outline-none bg-transparent text-right" type="text" id="" value="S/. 3500.00" readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-6">
                    {/* <a href="#" className="w-48 h-10 text-center inline-block bg-orange-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Pagar</a> */}
                    <button className="w-48 h-10 text-center inline-block bg-orange-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={togglePopup}>Pagar</button>
                </div>
                {showPopup && (
                    <div className="flex items-center bg-black/50 w-full h-full fixed top-0 left-0 justify-center">
                        <div className="bg-stone-50 rounded-xl p-7 flex flex-col items-center">
                            <Image
                                className="mobile2:h-[100px] mobile2:w-[100px] mobile3:h-[120px] mobile3:w-[120px] text-center "
                                src="/ok.svg"
                                width={100}
                                height={100}
                                alt="Ok de GameOn"
                            />
                            {/* <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
                            <circle fill="#4CAF50" cx="24" cy="24" r="21" />
                            <polygon fill="#CCFF90" points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4" />
                        </svg> */}
                            <p className="text-3xl mt-2">¡Exito!</p>
                            <p className="my-2">Su orden fue registrada</p>
                            <button className="w-48 h-12 text-center inline-block bg-orange-400 hover:bg-green-700 text-white font-bold px-4 rounded-full" onClick={togglePopup}>Continuar comprando</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
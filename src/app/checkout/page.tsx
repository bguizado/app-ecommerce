'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function CheckoutPage() {
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const targetElement = event.target as HTMLElement;

            if (showPopup && targetElement && popupRef.current && !popupRef.current.contains(targetElement)) {
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

    const handleContinueShopping = () => {
        setShowPopup(false);
        router.push("/");
    };

    return (
        <div className="flex items-center justify-center w-screen">
            <div className="flex flex-col bg-stone-50 w-full max-w-[650px] p-4 rounded-3xl">
                <div className="w-full sm:mt-7 border-b border-stone-300">
                    <div className="p-4 sm:p-6">
                        <p className="text-gray-700 text-base font-semibold pb-2">Dirección de entrega</p>
                        <input className="w-full h-10 rounded-full pl-5" type="text" value="Av. Carlos Izaguirre 192 - Los Olivos" readOnly />
                    </div>
                </div>
                <div className="flex justify-center items-center w-full border-b border-stone-300">
                    <div id="card" className="relative w-80 h-56 mt-7 mb-7 rounded-2xl font-mono text-white overflow-hidden cursor-pointer">
                        <div className="top-0 left-0 w-full h-full flex flex-col justify-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-tr from-blue-900 to-gray-700 z-20">
                            <div className="flex justify-between items-center">
                                <Image className="w-12" src="/chip.png" width={1000} height={1000} alt="Chip" />
                                <Image className="w-12" src="/visa.png" width={1000} height={1000} alt="Visa" />
                            </div>
                            <div className="">
                                <label className="hidden">Card Number</label>
                                <input className="outline-none w-full bg-transparent text-center text-xl sm:text-2xl" type="text" id="" value="1234 **** **** 9876" readOnly />
                            </div>
                            <div className="w-full flex flex-row justify-between font-semibold">
                                <div className="w-1/2 sm:w-full flex flex-col">
                                    <label>Titular</label>
                                    <input className="outline-none bg-transparent" type="text" id="" value="Kuto Guadalupe" readOnly />
                                </div>
                                <div className="w-1/2 sm:w-1/3 flex flex-col">
                                    <label className="text-right">Vence</label>
                                    <input className="outline-none bg-transparent text-right" type="text" id="" value="10/28" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b border-stone-300">
                    <div className="p-4 sm:p-6">
                        <div className="w-full flex flex-row justify-between text-base sm:text-lg">
                            <div className="w-full flex flex-col">
                                <label className="mb-2">Fecha de entrega:</label>
                                <label>Delibery:</label>
                            </div>
                            <div className="w-1/2 sm:w-1/3 flex flex-col">
                                <input className="outline-none bg-transparent mb-2 text-right" type="text" id="" value="05/06/2023" readOnly />
                                <input className="outline-none bg-transparent text-right" type="text" id="" value="S./ 0.00" readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-b-3xl shadow-xl pb-4">
                    <div className="p-4 sm:p-6">
                        <div className="w-full flex flex-row justify-between text-base sm:text-lg font-semibold">
                            <div className="w-full flex flex-col">
                                <label>Total a Pagar:</label>
                            </div>
                            <div className="w-1/2 sm:w-1/3 flex flex-col">
                                <input className="outline-none bg-transparent text-right" type="text" id="" value="S/. 3500.00" readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-6">
                    <button className="w-48 h-10 text-center inline-block bg-orange-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={togglePopup}>Pagar</button>
                </div>
                {showPopup && (
                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50">
                        <div className="bg-stone-50 rounded-xl p-7 flex flex-col items-center">
                            <Image
                                className="w-[100px] h-[100px] mobile3:w-[120px] mobile3:h-[120px] text-center"
                                src="/ok.svg"
                                width={100}
                                height={100}
                                alt="Ok de GameOn"
                            />
                            <p className="text-3xl mt-2">¡Éxito!</p>
                            <p className="my-2">Su orden fue registrada</p>
                            <button className="w-48 h-12 text-center inline-block bg-orange-400 hover:bg-green-700 text-white font-bold px-4 rounded-full" onClick={handleContinueShopping}>Continuar comprando</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
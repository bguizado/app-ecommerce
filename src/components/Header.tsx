import Image from 'next/image'

const Header = () => {
    return (
        <div className="bg-gray-300 "> {/* mb-10 h-1/4 */}
            <header className="bg-slate-700 h-24 w-full flex justify-start relative ">
                <Image className='pl-4 mt-4 h-14 w-32' src="/logo.svg" width={100} height={100} alt="Logo de GameOn" />
                <div className='flex justify-center absolute w-full top-20'>
                    <input className='w-200 h-10 rounded-full pl-5' type="text" placeholder='Ingrese su búsqueda' />
                </div>
            </header>
        </div>
    )
}

export default Header

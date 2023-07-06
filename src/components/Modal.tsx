import React from 'react';
const Modal = ({ isVisible, onClose, children }: { isVisible: boolean, onClose: () => void, children: React.ReactNode }) => {

    if (!isVisible) return null;

    return (
        <>
            <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur">
                <div className='w-80 h-1/2 bg-white relative rounded-xl p-5'>
                    <div className='flex h-full flex-col justify-center items-center'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
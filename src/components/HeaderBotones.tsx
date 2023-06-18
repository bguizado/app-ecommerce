import React from 'react'

const HeaderBotones = ({ text, className, onClick }: { text: string; className: string; onClick: () => void }) => {
  return (
    <>
        <button className={`h-8 rounded-full flex items-center justify-center text-sm font-medium ${className}`} onClick={onClick}>
        <p>{text}</p>
        </button>
    </>
  )

}

export default HeaderBotones
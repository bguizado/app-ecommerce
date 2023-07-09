
import Preciocart from '@/components/Preciocart'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='p-0 w-auto h-4/5'>
    {/* ver si se puede aplicar flex-1 al contenido y al body colocarle flex  y quitar ese p-*/} 
    { <Preciocart/>}
  </div>
  )
}

export default page
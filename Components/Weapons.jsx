import React from 'react'
import Image from 'next/image'


const Weapons = ({image , name}) => {
  return (
    <>
        <div className=' w-44  gap-4 flex flex-wrap justify-center border-2 border-gray-400 py-10 px-14 rounded-lg hover:border-yellow-500 cursor-pointer'>
          <Image src={image} width={80} height={80} />
          <h1 className='text-2xl font-bold'>{name}</h1>
    </div>
    </>
  )
}

export default Weapons
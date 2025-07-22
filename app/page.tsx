import React from 'react'
import Image from "next/image";
import logo from '../public/logo2.png'

const HomePage = () => {
  return (
    <div className='text-red-400 p-auto m-auto'>
      Home
              <Image
                src={logo}
                alt= 'web site logo'
                width={87} 
                height={23} 
                className="absolute w-[87px] h-[23px]"
              />
    </div>
  )
}

export default HomePage

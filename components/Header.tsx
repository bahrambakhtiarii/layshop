import React from 'react'
import Image from "next/image";
import logoDes from '../public/logo4.png'
import logoMob from '../public/logo2.png'
import searchicon from '../public/line-md--search 1.png';
import Link from 'next/link';
import Badge from '@/components/Badge';






const Header = () => {
  return (
   




    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">


      <div className="h-32 rounded lg:col-span-2">

        <div className='relative'>
          <Link href={'/'} className='hidden md:block'>
              <Image
                src={logoDes}
                alt= 'web site logo'
                width={135} 
                height={135} 
                className="absolute w-[135px] h-[135px] top-0 right-20 object-cover"
              />
          </Link> 
          <Link href={'/'} className='md:hidden'>
              <Image
                src={logoMob}
                alt= 'web site logo'
                width={87} 
                height={23} 
                className="absolute w-[87px] h-[23px] top-13 right-5 object-cover"
              />
          </Link> 
          
        </div>

        <div className='
              absolute 
              bg-[#DDE3EC]
              w-[262px] h-[42px] 
              rounded-[50px]
              mt-11 mr-30 
              flex items-center px-4 
              md:mt-12 md:mr-60 md:w-[578px] md:h-[42px]
              lg:w-[420px] 
          '>
          <Image
              src={searchicon}
              alt='search icon'
              width={25}
              height={25}
              className="
                  w-[16px] h-[16px] 
                  mr-2 
                  md:w-[25px] md:h-[25px]
              "
          />
          <input
              type="search"
              placeholder="جستجو در لی شاپ" 
              className='
                  flex-grow 
                  h-full 
                  bg-transparent
                  focus:outline-none
                  text-sm 
                  md:text-base 
                  placeholder-gray-500 
                  pr-2
              '
          />
        </div>

      </div>

      <div className="hidden h-32 mt-12 rounded lg:flex ">

        <div>
          <a
          className="group relative inline-block overflow-hidden border-2 border-[#DDE3EC] rounded-r-[50px] px-6 py-2 focus:ring-3 focus:outline-hidden"
          href="/testlink"
        >
          <span
            className="absolute inset-y-0 right-0 w-[2px] bg-[#14274E] transition-all group-hover:w-full"
          ></span>

          <span
            className="relative text-sm font-medium text-[#212A3E] transition-colors group-hover:text-white"
          >
            ورود
          </span>
        </a>
        
        <a
          className="group relative inline-block overflow-hidden border-2 border-[#DDE3EC] rounded-l-[50px] px-5 py-2 focus:ring-3 focus:outline-hidden"
          href="/testlink"
        >
          <span
            className="absolute inset-y-0 left-0 w-[2px] bg-[#14274E] transition-all group-hover:w-full"
          ></span>

          <span
            className="relative text-sm font-medium text-[#212A3E] transition-colors group-hover:text-white"
          >
            ثبت نام
          </span>
        </a>
        </div>
        <div className='mr-4'>
          <Badge />
        </div>
      </div>
    </div>


  )
}

export default Header











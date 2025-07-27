import React from 'react'
import Image from "next/image";
import logoDes from '../public/logo4.png'
import logoMob from '../public/logo2.png'
import searchicon from '../public/line-md--search 1.png';
import Link from 'next/link';
import Badge from '@/components/Badge';






const Header = () => {
  return (

    <header className="bg-white w-full px-4 py-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        
        <div className="w-full flex items-center justify-between gap-4 lg:w-4/10">

          <Link href="/" className="shrink-0">
            <Image
              src={logoDes}
              alt="logo"
              width={135}
              height={135}
              className="hidden md:block w-[135px] h-[135px] object-contain"
            />
            <Image
              src={logoMob}
              alt="logo"
              width={87}
              height={23}
              className="md:hidden w-[87px] h-[23px] object-contain"
            />
          </Link>

          <div className="flex items-center bg-[#DDE3EC] rounded-[50px] px-4 w-full h-[42px] max-w-md">
            <Image src={searchicon} alt="search" width={20} height={20} className="mr-2" />
            <input
              type="search"
              placeholder="جستجو در لی شاپ"
              className="flex-grow bg-transparent focus:outline-none text-sm md:text-base placeholder-gray-500"
            />
          </div>

        </div>

        <div className="hidden lg:flex lg:items-center">
          <a className="group relative inline-block overflow-hidden border-2 border-[#DDE3EC] rounded-r-[50px] px-6 py-2 focus:ring-3 focus:outline-hidden" href="/testlink">
            <span className="absolute inset-y-0 right-0 w-[2px] bg-[#14274E] transition-all group-hover:w-full" />
            <span className="relative font-medium text-[#212A3E] transition-colors group-hover:text-white">ورود</span>
          </a>
          <a className="group relative inline-block overflow-hidden border-2 border-[#DDE3EC] rounded-l-[50px] px-5 py-2" href="/testlink">
            <span className="absolute inset-y-0 left-0 w-[2px] bg-[#14274E] transition-all group-hover:w-full" />
            <span className="relative font-medium text-[#212A3E] transition-colors group-hover:text-white">ثبت نام</span>
          </a>

          <div className="mr-4">
            <Badge />
          </div>
        </div>

      </div>
    </header>



  )
}

export default Header











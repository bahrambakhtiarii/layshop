'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


interface SubMenuItem {
    title: string;
    linkTo: string;
}

interface SubCategoryMenu {
    title: string;
    items: SubMenuItem[];
}

interface MenuItem {
    id: string;
    title: string;
    icon: string;
    subCategories?: SubCategoryMenu[];
}


const DesktopMegaMenu = () => {

    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    

    useEffect(() => {
        const fetchData = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
            const res = await fetch(`${baseUrl}/api/menu`, {
            cache: 'no-store'
            });

            if (!res.ok) {
            console.error(`Failed to fetch menu data: ${res.status} ${res.statusText}`);
            return;
            }

            const data = await res.json();
            setMenuItems(data);
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-white shadow-lg p-6 mt-6 w-[270px] h-[400px] rounded-[10px]'>
      <ul>
        {menuItems.map(item =>
            <li key={item.id} >
                <Link 
                    href="/"
                    className='flex border-b-1 border-[rgba(221,227,236,0.4)] w-[230px] gap-[7px] p-2 items-center hover:bg-[#DDE3EC] cursor-pointer'
                >

                    <div className='w-[40px] h-[40px] bg-[#DDE3EC] rounded-full shadow-[0_2px_3px_rgba(0,0,0,0.1)]'>
                        <Image 
                            src={item.icon}
                            alt='menu icon'
                            width={28}
                            height={28}
                            className="w-[28px] h-[28px] m-auto mt-[5px]"
                        />
                    </div>
                    <div className="">
                        <h4 className="text-[14px] font-semibold">{item.title}</h4>
                    </div>
                </Link>
        </li>
        )}
        
      </ul>
    </div>
  )
}

export default DesktopMegaMenu

'use client';
import { base, li } from "framer-motion/client";
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

const MobileMenu = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]); 
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
                const res = await fetch(`${baseUrl}/api/menu`, {
                    cache: 'no-store'
                });

                if(!res.ok){
                    console.error(`Failed to fetch menu data: ${res.status} ${res.statusText}`);
                    return;
                }
                const data = await res.json();
                setMenuItems(data);
            }catch(error){
                console.error('Error fetching menu data:', error);
            }
        }
        fetchData();
    }, [])

    
  return (
    <div className="p-0 bg-white fixed ">
        <ul>
            {menuItems.map(item =>
                <li
                    key={item.id}
                    className="w-[100px] h-[80px] border-b-1 border-[rgba(221,227,236,0.6)] bg-[#F1F6F9] m-0 cursor-pointer"
                >
                    <div className="py-3">
                        <Image 
                            src={item.icon}
                            alt='menu icon'
                            width={20}
                            height={20}
                            className="w-[25px] h-[25px] m-auto"
                        />
                    </div>
                    <div className="w-[82px] h-[28px] text-[10px] font-semibold text-center m-auto ">
                        {item.title}
                    </div>
                </li>
            )}
        </ul>
    </div>
  )
}

export default MobileMenu
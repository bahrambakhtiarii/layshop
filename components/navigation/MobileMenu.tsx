'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenuItems from "./MobileMenuItems";


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
    const [subMenuItems, setSubMenuItems] = useState<SubCategoryMenu[]>([]); 

    
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
    <div className="fixed top-0 right-0 w-full bg-white z-50">
        <ul>
            {menuItems.map(item =>
                <li
                    key={item.id}
                    className="w-1/4 min-w-[80px] min-h-[80px] border-b-1 border-[rgba(221,227,236,0.6)] bg-[#F1F6F9] m-0 cursor-pointer"
                    onClick={() => setSubMenuItems(item.subCategories ?? [])}
                >
                    <div className="flex flex-col items-center justify-center space-y-1">

                        <div className="">
                            <div className="py-3">
                                <Image 
                                    src={item.icon}
                                    alt='menu icon'
                                    width={20}
                                    height={20}
                                    className="w-[25px] h-[25px] m-auto"
                                />
                            </div>
                            <div className="w-[82px] h-[28px] text-[13px] font-semibold text-center m-auto ">
                                {item.title}
                            </div>
                        </div>
                    </div>
                </li>
            )}
        </ul>
        {subMenuItems.length > 0 && (
            <div className="w-3/4 fixed left-0 top-0 bg-white p-4 z-50">
                <MobileMenuItems subMenuItems={subMenuItems}/>
            </div>
        )}
    </div>
  )
}

export default MobileMenu
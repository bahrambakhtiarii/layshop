'use client'; 

import React from 'react';
import Link from 'next/link';

interface SubMenuItem {
    title: string;
    linkTo: string;
}

interface SubCategoryMenu {
    title: string;
    items: SubMenuItem[];
}

interface DesktopMegaHoverProps {
  subCategories: SubCategoryMenu[] | undefined;
}

const DesktopMegaHover: React.FC<DesktopMegaHoverProps> = ({ subCategories }) => {
  if (!subCategories) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-8 w-[600px] min-h-[400px] max-h-[400px] p-6 bg-[#DDE3EC] rounded-lg shadow-lg overflow-y-auto">
      {subCategories.map((subCat) => ( 
        <div key={subCat.title}>
          <h4 className='text-[14px] font-semibold mb-2'>{subCat.title}</h4>
          <ul className="space-y-2">
            {subCat.items.map((item) => (
              <li key={item.title} className="hover:text-[#394867] transition">
                <Link href={item.linkTo} className='text-[12px]'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DesktopMegaHover;




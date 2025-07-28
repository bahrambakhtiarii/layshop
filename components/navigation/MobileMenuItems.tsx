import Link from 'next/link';
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';



interface SubMenuItem {
    title: string;
    linkTo: string;
}

interface SubCategoryMenu {
    title: string;
    items: SubMenuItem[];
}

type Props = {
  subMenuItems: SubCategoryMenu[];
}

const MobileMenuItems: React.FC<Props> = ({ subMenuItems }) => {

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };


  return (
    <div className='pt-2'>
      {subMenuItems.map((item, index) =>
        <div key={item.title} className='mb-4'>
          <button
            onClick={() => handleAccordionClick(index)}
            className='flex w-full justify-between py-3'
          >
            <h4 className='text-lg font-semibold'>{item.title}</h4>
            <span
            className={`${openAccordionIndex === index ? "hidden" : ""}`}
            >
              <ArrowDropUpIcon />
            </span>
            <span
              className={`${openAccordionIndex === index ? "" : "hidden"}` }
            >
              <ArrowDropDownIcon />
            </span>
          </button>
          <ul
          className={`${openAccordionIndex === index ? "" : "hidden"}`}
          >
            {item.items.map(sub =>
              <li key={sub.title} className='m-4 pb-4'>
                <Link href={sub.linkTo} className='focus:text-[#9BA4B4] '>{sub.title}</Link>
              </li>
            )}
          </ul>

        </div>
      )}
    </div>
  )
}

export default MobileMenuItems




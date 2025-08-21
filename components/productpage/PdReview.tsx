'use client';
import React, { useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


type Props = {
  longDescription: string;
}


const PdReview: React.FC<Props> = ({ longDescription }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const contentRev = longDescription;
  
  const displayText = showAll ? contentRev : contentRev.slice(0, 300) + '...';
  
  return (
    <div className='w-full mx-15'>
      <h3 className='text-sm md:text-[16px] font-semibold mb-5 border-b-2 border-[#14274E] w-fit pb-3'>
        بررسی محصول
      </h3>
      <p className='text-[10px] md:text-[12px] lg:text-sm w-4/5 flex items-center justify-center mx-4 text-justify'>
        {displayText}
      </p>
      <button
        onClick={() => setShowAll((prev) => !prev)}
        className='mt-5 font-semibold text-sm md:text-[16px] text-[#284684] cursor-pointer'
      >
        {showAll ? 'نمایش کمتر' : 'نمایش بیشتر'}
        {showAll ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }

      </button>
    </div>
  )
}

export default PdReview

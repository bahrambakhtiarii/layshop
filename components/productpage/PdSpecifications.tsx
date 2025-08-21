'use client';
import React, { useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface productDescription {
  id: number,
  title: string,
  description: string
}
type Props = {
  specifications: productDescription[];
}

const PdSpecifications: React.FC<Props> = ({ specifications }) => {
  const [showAll, setShowAll] = useState<boolean> (false);


  const PD_DESCRIPTION = specifications;

  const displayDescription: productDescription[] = showAll ? PD_DESCRIPTION : PD_DESCRIPTION.slice(0, 5);
  return (
    <div className="overflow-x-auto m-15 pt-5 border-t-2 border-[rgba(155,164,180,0.3)]">
      <h3 className='text-sm md:text-[16px] font-semibold mb-5 border-b-2 border-[#14274E] w-fit pb-3'>
        مشخصات
      </h3>
      <table className="w-full md:w-2xl lg:w-5xl divide-y-2 divide-gray-200">
        <tbody className="divide-y divide-gray-200">

          {displayDescription.map(item =>
            <tr key={item.id} className="text-sm lg:text-[15px] font-medium">
              <td className="px-3 py-5 text-[#394867] font-semibold">{item.title}</td>
              <td className="px-3 py-5 ">{item.description}</td>
            </tr>
          )}
          

          
        </tbody>
      </table>
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

export default PdSpecifications

import React from 'react'

const ActionButtons = () => {
  return (
    <div className='py-20 mx-10 w-full'>
      <ul className='flex gap-10 border-b border-[rgba(155,164,180,0.7)] font-semibold text-[12px] md:text-[14px]'>
        <li className='cursor-pointer'>بررسی محصول</li>
        <li className='cursor-pointer'>مشخصات</li>
        <li className='cursor-pointer'>نظرات</li>
      </ul>
    </div>
  )
}

export default ActionButtons

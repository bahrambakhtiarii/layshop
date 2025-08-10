import React from 'react'

const ActionButtons = () => {
  return (
    <div className='pb-30 w-[380px] md:w-[680px] lg:w-[980px]'>
      <ul className='flex gap-10 border-b border-[rgba(155,164,180,0.7)] '>
        <li className='cursor-pointer'>بررسی محصول</li>
        <li className='cursor-pointer'>مشخصات</li>
        <li className='cursor-pointer'>نظرات</li>
      </ul>
    </div>
  )
}

export default ActionButtons

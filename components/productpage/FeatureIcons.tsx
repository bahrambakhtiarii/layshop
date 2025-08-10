import React from 'react'
import Image from 'next/image';

interface features {
    id: number
    imgSrc: string,
    cap: string
}

const featuresIco: features[] =[
    {
        id: 1, 
        imgSrc: '/features-icon/customer.png',
        cap: 'پشتیبانی 24 ساعته'
    },
    {
        id: 2, 
        imgSrc: '/features-icon/box.png',
        cap: '7 روز ضمانت بازگشت'
    },
    {
        id: 3, 
        imgSrc: '/features-icon/guarantee.png',
        cap: 'تضمین اصالات کالا  '
    },
    {
        id: 4, 
        imgSrc: '/features-icon/delivery.png',
        cap: 'ارسال سریع'
    }
]

const FeatureIcons = () => {
  return (
    <div className='flex flex-wrap md:gap-[70px] lg:gap-[80px] xl:gap-[120px] justify-center items-center pt-5'>
        {featuresIco.map(item => 
            <div key={item.id} className='flex flex-col justify-center items-center w-[110px]'>
                <Image 
                    src={item.imgSrc}
                    alt={item.cap}
                    width={64}
                    height={64}
                    className=" cursor-pointer 
                        w-[28px] h-[28px]
                        md:w-[64px] md:h-[64px]
                    "
                />
                <p className='text-[12px] mt-1 text-center'>{item.cap}</p>
            </div>
        )} 
    </div>
  )
}

export default FeatureIcons

import React from 'react'
import Image from "next/image";
import iconWar from '../../public/warranty.png';


interface Cart {
    price: number,
    discount: number,
    warranty: string,
}

const AddToCart: React.FC<Cart> = ({price , discount, warranty}) => {

    const pricrValue = discount > 0 ?  
    Math.round(price - (discount*(price / 100))) 
    : price;

  return (
    <div>
        <div className= 'hidden lg:flex flex-col min-w-[400px] min-h-[216px] mt-8 bg-[#DDE3EC] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.2)]'>

            <div className='flex justify-end mt-8 ml-5'>
                <span className='text-xl font-bold px-2'>{pricrValue}</span>
                <span className='text-sm font-semibold'>تومان</span>
            </div>

            <div className='mt-7 mr-4 flex'>
                <Image 
                    src={iconWar}
                    alt='گارانتی'
                    width={28}
                    height={28}
                    className="w-[28px] h-[28px] ml-2"
                />
                <p className='text-[18px] font-semibold'>{warranty}</p>
            </div>

            <button
            className="rounded-[10px] bg-[#14274E] w-[300px] h-[40px] text-sm font-medium
            text-white hover:bg-[#394867] mt-8 m-auto shadow-[0px_2px_4px_0px_rgba(20,39,78,0.5)] cursor-pointer"

            >
                افزودن به سبد خرید
            </button>
        </div>


        <div className='lg:hidden fixed bottom-0 right-0 w-full rounded-t-[10px] bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.1)]'>
            <div className='flex justify-between items-center px-4 py-2'>

                <div className='w-1/2 flex flex-col justify-center'>
                    <span className='text-xs md:text-sm'>جمع سبد خرید:</span>
                    <span className=' font-bold taxt-base md:text-lg'>
                        {pricrValue}
                        <span className='text-xs md:text-sm mr-1'> تومان</span>
                    </span>
                </div>

                <div className='w-1/2 flex justify-center items-center'>
                    <button
                         className="rounded-[8px] bg-[#14274E] px-12 md:px-18 py-3 md:py-5 
                          text-xs md:text-sm font-medium text-white 
                          hover:bg-[#394867] shadow-[0px_2px_4px_0px_rgba(20,39,78,0.5)] cursor-pointer"
                    >
                        افزودن به سبد خرید
                    </button>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default AddToCart

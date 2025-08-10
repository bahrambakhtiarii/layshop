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
    <div className= 'flex flex-col min-w-[400px] min-h-[216px] mt-8 bg-[#DDE3EC] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.2)]'>

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
  )
}

export default AddToCart

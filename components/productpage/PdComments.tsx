import React from 'react'
import Image from "next/image";
import prof from '../../public/user-prof.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



const PdComments = () => {
  
  return (
    <div className='m-15 p-5'>
      <h3 className='text-sm md:text-[16px] font-semibold mb-5 border-b-2 border-[#14274E] w-fit pb-3'>
        نظرات کاربران
      </h3>


       <div className="max-w-[336px] md:max-w-[696px] lg:max-w-[970px] rounded-[10px] bg-[#DDE3EC] p-5 shadow-[0_2px_20px_0_rgba(20,39,78,0.1)]">
      
        
        {/* prof and reating */}
        <div className='flex gap-2 min-h-12 mb-5'>
          <div className='flex gap-2 w-full items-center justify-start'>

            <Image 
              src={prof}
              alt='پروفایل'
              width={42}
              height={42}
              className="w-[28px] md:w-[42px] h-[28px] md:h-[42px]"
            />
            <h4 className='px-2.5 text-xs md:text-[18px] font-medium '>سامان نریمان جهان</h4>

          </div>

          <div className='flex justify-end items-center'>
            <Stack spacing={1}>
              <div className='md:hidden'>
                <Rating name="half-rating-read" defaultValue={3} precision={1} readOnly size="small"/>
              </div>
              <div className='hidden md:block'>
                <Rating name="half-rating-read" defaultValue={3} precision={1} readOnly />
              </div>
              
            </Stack>
          </div>

        </div>

        {/* content and date */}
        <div className='pb-5' > 
          <p className='text-xs md:text-sm font-medium pb-2.5'>تاریخ: 1404/05/22</p>
          <p className='text-[10px] md:text-xs text-justify'>            
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      
      </div>

    </div>
   
  )
}

export default PdComments





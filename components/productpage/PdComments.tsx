'use client';
import React, { useState } from 'react'
import Image from "next/image";
import prof from '../../public/user-prof.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Users_Coments{
  id: number
  author: string,
  date: string,
  sccor: number,
  comment: string,
}

const PdComments = () => {
  const [showAll, setShowAll] = useState<boolean> (false);


  const COMENTS: Users_Coments[] = [
    {
      id: 1,
      author: 'علی بهروزی',
      date: 'تاریخ: 1404/05/22',
      sccor: 3,
      comment: 'این محصول را خریداری کردم و از لحاظ کیفیت ساخت به نظرم می‌توانست بهتر باشد. با این حال، کارایی آن قابل قبول است و نیازهای اصلی من را برطرف می‌کند. امیدوارم در نسخه‌های بعدی به جزئیات بیشتری توجه شود.'
    },
    {
      id: 2,
      author: 'سارا احمدی',
      date: 'تاریخ: 1404/05/20',
      sccor: 5,
      comment: 'از خریدم بسیار راضی هستم. دقیقاً همان چیزی است که در توضیحات محصول ذکر شده بود و حتی از انتظارم فراتر رفت. بسته‌بندی محصول بسیار حرفه‌ای و محکم بود و بدون هیچ آسیبی به دستم رسید. حتماً به دیگران نیز این محصول را پیشنهاد می‌کنم.'
    },
    {
      id: 3,
      author: 'حسین',
      date: 'تاریخ: 1404/05/18',
      sccor: 4,
      comment: 'محصول با تأخیر کمی به دستم رسید، اما پس از استفاده متوجه شدم که کیفیت آن خوب است. در مقایسه با محصولات مشابه در بازار، قیمت مناسبی دارد. به نظرم برای استفاده روزمره کاملاً مناسب است و ارزش خرید بالایی دارد.'
    },
    {
      id: 4,
      author: 'مریم',
      date: 'تاریخ: 1404/05/16',
      sccor: 2,
      comment: 'متاسفانه این محصول نتوانست نیازهای من را برطرف کند. عملکرد آن آنطور که انتظار داشتم نبود و در برخی مواقع دچار مشکل می‌شد. امیدوارم شرکت سازنده به بازخوردهای مشتریان توجه کند و در به‌روزرسانی‌های بعدی این مشکلات را رفع نماید.'
    },
    {
      id: 5,
      author: 'رضا',
      date: 'تاریخ: 1404/05/15',
      sccor: 5,
      comment: 'این بهترین محصولی است که تا به حال خریده‌ام. طراحی بسیار زیبا و کاربردی دارد. تیم پشتیبانی نیز بسیار پاسخگو و حرفه‌ای بودند و در هر مرحله از خرید من را راهنمایی کردند. تجربه خرید بسیار خوبی داشتم.'
    },
      {
      id: 6,
      author: 'فاطمه',
      date: 'تاریخ: 1404/05/13',
      sccor: 1,
      comment: 'اصلاً از خریدم راضی نیستم. محصولی که به دستم رسید با تصاویر سایت تفاوت داشت و کیفیت ساخت آن بسیار پایین بود. به هیچ عنوان این محصول را به کسی پیشنهاد نمی‌کنم و قصد دارم آن را مرجوع کنم.'
    },
    {
      id: 7,
      author: 'جواد نظری',
      date: 'تاریخ: 1404/05/12',
      sccor: 4,
      comment: 'کیفیت کلی محصول خوب بود، اما به نظرم می‌توانست کمی ارزان‌تر باشد. کارایی آن نسبت به هزینه‌ای که پرداخت کردم قابل قبول است و در کل راضی هستم. اگر به دنبال یک گزینه اقتصادی و کاربردی هستید، این محصول می‌تواند انتخاب خوبی باشد.'
    },
    {
      id: 8,
      author: 'امیر',
      date: 'تاریخ: 1404/05/11',
      sccor: 5,
      comment: 'محصولی بی‌نظیر! از هر لحاظ عالی است. طراحی، کارایی و دوام آن حرف ندارد. از خریدم بسیار خوشحالم و قطعاً دوباره از این فروشگاه خرید خواهم کرد.'
    },
    {
      id: 9,
      author: 'نازنین یوسفی',
      date: 'تاریخ: 1404/05/10',
      sccor: 2,
      comment: 'مشکلاتی در عملکرد محصول مشاهده کردم. پس از چند روز استفاده، دچار اشکال شد و نتوانستم از آن به درستی استفاده کنم. امیدوارم با پشتیبانی تماس بگیرم و مشکل حل شود.'
    },
    {
      id: 10,
      author: 'محبوبه پناهی',
      date: 'تاریخ: 1404/05/09',
      sccor: 3,
      comment: 'کارکرد محصول خوب است، اما به نظرم جای پیشرفت دارد. به طور کلی، انتظاراتم را برآورده کرد، ولی می‌توانست بهتر باشد. نسبت به قیمتش، قابل قبول است.'
    }
  ];

  const displayDescription: Users_Coments[] = showAll ? COMENTS : COMENTS.slice(0, 4)
  
  return (
    <div className='m-15 p-5'>
      <h3 className='text-sm md:text-[16px] font-semibold mb-5 border-b-2 border-[#14274E] w-fit pb-3'>
        نظرات کاربران
      </h3>

      {displayDescription.map(item =>
       <div key={item.id} className="
       max-w-[336px] md:max-w-[696px] lg:max-w-[970px] rounded-[10px]
        bg-[#DDE3EC] p-5 shadow-[0_2px_20px_0_rgba(20,39,78,0.1)]
        my-5
        ">
      
        
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
            <h4 className='px-2.5 text-xs md:text-[18px] font-medium '>{item.author}</h4>

          </div>

          <div className='flex justify-end items-center'>
            <Stack spacing={1}>
              <div className='md:hidden'>
                <Rating name="half-rating-read" defaultValue={item.sccor} precision={1} readOnly size="small"/>
              </div>
              <div className='hidden md:block'>
                <Rating name="half-rating-read" defaultValue={item.sccor} precision={1} readOnly />
              </div>
              
            </Stack>
          </div>

        </div>

        {/* content and date */}
        <div className='pb-5' > 
          <p className='text-xs md:text-sm font-medium pb-2.5'>{item.date}</p>
          <p className='text-[10px] md:text-xs text-justify'>            
            {item.comment}
          </p>
        </div>
      
      </div>

      )}

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

export default PdComments





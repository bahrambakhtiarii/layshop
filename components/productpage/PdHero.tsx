'use client';
import React, { useState } from 'react'
import ProductSlid from './ProductSlid';
import ImFeatures from './ImFeatures';
import FeatureIcons from './FeatureIcons';
import AddToCart from './AddToCart';
import iconWar from '../../public/warranty.png';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";





interface color{
    faName: string,
    enName: string,
    colorCode: string
}
interface ProductImportantFeatures {
  id: number
  title: string;
  description: string;
}
interface ProductSlids {
  src: string;
  width: number;
  height: number;
  title: string;
}
interface pdheroinfo {
    pdColors: color[],
    inventory: boolean;
    price: number;
    discount: number; 
    titleFa: string;
    titleEn: string;
    importantFeatures: ProductImportantFeatures[];
    mainImg: string;
    slidsImg: ProductSlids[];
}

const PdHero = () => {

    const HERO_DATA:pdheroinfo[] = [
        {
        pdColors: [
            {
                faName: 'قرمز',
                enName: 'Red',
                colorCode: '#fc031c'
            },
            {
                faName: 'سبز',
                enName: 'Green',
                colorCode: '#07e041'
            },
            {
                faName: 'زرد',
                enName: 'Yellow',
                colorCode: '#e0ce07'
            },
            
        ],
        inventory: true,
        price: 2540000,
        discount: 0, 
        titleFa: 'هدفون بلوتوثی بیتس مدل Solo 4',
        titleEn: 'Beats Solo 4 Bluetooth Headphone',
        importantFeatures: [
            { id:1, title: 'نویز کنسلینگ', description: 'فعال' },
            { id:2, title: 'حالت شفافیت', description: 'دارد' },
            { id:3, title: 'عمر باتری', description: 'تا 6 ساعت پخش موسیقی' },
            { id:4, title: 'نویز کنسلینگ', description: 'فعال' },
            { id:5, title: 'نویز کنسلینگ', description: 'فعال' },
            { id:6, title: 'نویز کنسلینگ', description: 'sc' },
            { id:7, title: 'نویز کنسلینگ', description: 'فعال' },
            { id:8, title: 'نویز کنسلینگ', description: 'فعال' },
        ],
        mainImg: '/product-images/Apple-AirPods-Pro-2/airpod3.jpeg',
        slidsImg: [
            {
            src: '/product-images/Apple-AirPods-Pro-2/airpod1.jpeg',
            width: 1200,
            height: 800,
            title: 'نمای پشت',
            },
            {
            src: '/product-images/Apple-AirPods-Pro-2/airpod2.jpeg',
            width: 1200,
            height: 800,
            title: 'نمای پهلو',
            },
            {
            src: '/product-images/Apple-AirPods-Pro-2/airpod3.jpeg',
            width: 1200,
            height: 800,
            title: 'نمای دیگر',
            },
            {
            src: '/product-images/Apple-AirPods-Pro-2/watch-1.jpeg',
            width: 1200,
            height: 800,
            title: 'نمای دیگر',
            },
            {
            src: '/product-images/Apple-AirPods-Pro-2/watch-2.jpeg',
            width: 1200,
            height: 800,
            title: 'نمای دیگر',
            },
            {
            src: '/product-images/Apple-AirPods-Pro-2/watch-3.jpeg',
            width: 1200,
            height: 800,
            title: 'نمای دیگر',
            },
        ],
        },
        
    ]
    const [selectedColor, setSelectedColor] = useState('');










  return (
    <div className='flex p-2 h-auto mb-20'>

    {/*info*/}
    {HERO_DATA.map(item => 
      <div key={item.titleEn} 
      className='w-full lg:w-[73%] bg-white lg:ml-2 lg:border border-[#D9D9D9] lg:rounded-[30px] lg:flex flex-col justify-between shadow-sm'>

        {/*main*/}
        <div className='flex flex-col p-3 lg:flex-row lg:pb-3'>
          {/*slids*/}
          <div className='w-full flex items-center justify-center lg:w-[45%]'>
          
              <ProductSlid
                  productImages={item.slidsImg}
                  mainImg={item.mainImg}
              />
          
          </div>

          {/*2*/}
          <div className='lg:w-[55%]'>

            {/*title*/}
            <div className='my-8 lg:my-13'>
              <h3 className='text-lg md:text-xl font-bold'>{item.titleFa}</h3>
            
              <div className="flex items-center gap-2 mt-5 w-full overflow-hidden">
                <span className="whitespace-nowrap text-[#9BA4B4] text-[10px] md:text-sm font-medium shrink-0">
                  {item.titleEn}
                </span>

                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
            </div>

            {/*Colors*/}
            <div className='mb-10'>
              <p className='font-semibold text-sm md:text-xl mb-5'>رنگ: {selectedColor}</p>

              <div className="flex flex-wrap gap-4 ">
                {item.pdColors.map(col => 
                  <fieldset key={col.enName} >
                    <legend className="sr-only">Color</legend>

                    <label
                      htmlFor={`Color${col.enName}`}
                      className={`block size-6 md:size-8 rounded-full shadow-sm ring-offset-2 ${
                        selectedColor === col.enName ? 'ring-2' : ''
                      }`}
                      style={{
                        backgroundColor: col.colorCode,

                        boxShadow:
                          selectedColor === col.faName
                            ? "0 0 0 2px black"
                            : undefined,
                      }}
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value={col.enName}
                        id={`Color${col.enName}`}
                        className="sr-only"
                        checked={selectedColor === col.faName}
                        onChange={() => setSelectedColor(col.faName)}
                      />

                      <span className="sr-only">{col.faName}</span>
                    </label>
                  </fieldset>

                )}
              </div>

            </div>
          
            {/*waranty*/}
            <div className='lg:hidden flex flex-col my-15'>
                <div className='flex'>
                  <Image 
                      src={iconWar}
                      alt='گارانتی'
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] ml-2"
                  />
                  <p className='text-sm md:text-xl font-semibold'>گارانتی 18 ماهه تجارت لی شاپ</p>
              </div>
            </div>

            {/* importent espacfic */}   
            <div>
              <p className='text-sm md:text-xl font-semibold mb-4'>ویژگی های مهم:</p>
              <div className="hidden lg:grid gap-0.5 grid-cols-3">
                {item.importantFeatures.slice(0, 6).map(feat => 
                  <ImFeatures key={feat.id} features={feat} />
                )}
              </div>
              <div className='lg:hidden w-full'>
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                {item.importantFeatures.map(feat => 
                  <SwiperSlide key={feat.id} className='mb-4'>
                    <ImFeatures features={feat} />
                  </SwiperSlide>
                  
                )}
              </Swiper>
              </div>

              <div className="flex items-center justify-center mt-2 mb-10">
                <span className="hidden lg:block flex-1 h-px  bg-gray-300 "></span>

                <button className="shrink-0 px-4 text-gray-900 
                  w-[150px] md:w-[180px]
                  font-semibold text-[12px] md:text-[14px] 
                  h-[36px] border rounded-[30px] cursor-pointer
                ">
                  مشاهده همه ویژگی ها
                </button>

                <span className="hidden lg:block lg:flex-1 h-px bg-gray-300"></span>
              </div>
              

            </div>

          </div>
        </div>

        {/*FeatureIcons*/}
        <div className='min-h-[120px] border-t border-[#B9C0CB]'><FeatureIcons /></div>
            

      </div>
    )}
      






    {/*add to card*/}
      <div className='hidden lg:block lg:w-[27%]'>

        <AddToCart price={200000} discount={10} warranty={'گارانتی 18 ماهه تجارت لی شاپ'} />
      </div>


    </div>
  )
}


export default PdHero





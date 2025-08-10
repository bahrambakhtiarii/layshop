'use client';

import React, { useState } from 'react';
import GalleryLightbox from '@/components/productpage/GalleryLightbox';
import Image from 'next/image';
import type { SlideImage } from 'yet-another-react-lightbox';
import Carousel from '@/components/productpage/Carousel';

type Props = {
  productImages: SlideImage[];
  mainImg: string;
}

const ProductSlid: React.FC<Props> = ({productImages, mainImg}) => {
  const [open, setOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);


  const handleImageClick = (index: number) => {
    setCurrentIndex(index);       
    setLightboxOpen(true);        
  };

  return (
    <div className="p-4">
      <div className='hidden md:block'>
        <div className='flex flex-col w-[450px] min-h-[527px] '>
          <div className='h-3/4 mb-6'>
            <Image
              src={mainImg}
              alt={'تصویر اصلی محصول'}
              width={450}
              height={450}
              className=" rounded shadow cursor-pointer w-[450px] h-[450px] "
              onClick={() => setLightboxOpen(true)}
            />
          </div>

          <div className="grid grid-cols-4 gap-1 mt-1 h-1/4 ">
            {productImages.slice(1, 4).map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={'تصویر محصول'}
                width={72}
                height={72}
                className="rounded-[10px] shadow cursor-pointer w-[72px] h-[72px] border-1 border-[#DFDFDF]"
                onClick={() => handleImageClick(index)}
              />
            ))}
              <div className='rounded-[10px] shadow cursor-pointer w-[72px] h-[72px]
               bg-white/30 backdrop-blur-3xl flex items-center justify-center'>
                  <Image
                    src='/option.png'
                    alt={'مشاهده همه تصاویر'}
                    width={32}
                    height={32}
                    className=" cursor-pointer w-[32px] h-[32px] "
                    onClick={() => setLightboxOpen(true)}
                  />
              </div>
            </div>

          <GalleryLightbox
            slides={productImages}
            open={lightboxOpen}
            index={currentIndex}
            onClose={() => setLightboxOpen(false)}
          />
        </div>
      </div>

      <div className='block md:hidden w-full max-h-[380px] p-2'>
        <Image 
          src='/product-images/Apple-AirPods-Pro-2/airpod1.jpeg'
            alt={'تصویر اصلی محصول'}
            width={250}
            height={250}
            onClick={() => setOpen(true)}
            className="rounded-[10px] shadow cursor-pointer w-[250px] h-[250px]"
        />
        <Carousel
          slides={productImages}
          open={open}
          onClose={() => setOpen(false)}
          index={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      </div>    
      
      

      
    </div>
  );
};

export default ProductSlid;

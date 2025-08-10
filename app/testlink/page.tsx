import ActionButtons from '@/components/productpage/ActionButtons'
import PdHero from '@/components/productpage/PdHero'
import React from 'react'

const page = () => {
  // const productImages = [
  //   {
  //     src: '/product-images/Apple-AirPods-Pro-2/airpod1.jpeg',
  //     width: 1200,
  //     height: 800,
  //     title: 'نمای پشت',
  //   },
  //   {
  //     src: '/product-images/Apple-AirPods-Pro-2/airpod2.jpeg',
  //     width: 1200,
  //     height: 800,
  //     title: 'نمای پهلو',
  //   },
  //   {
  //     src: '/product-images/Apple-AirPods-Pro-2/airpod3.jpeg',
  //     width: 1200,
  //     height: 800,
  //     title: 'نمای دیگر',
  //   },
  //   {
  //     src: '/product-images/Apple-AirPods-Pro-2/watch-1.jpeg',
  //     width: 1200,
  //     height: 800,
  //     title: 'نمای دیگر',
  //   },
  //   {
  //     src: '/product-images/Apple-AirPods-Pro-2/watch-2.jpeg',
  //     width: 1200,
  //     height: 800,
  //     title: 'نمای دیگر',
  //   },
  //   {
  //     src: '/product-images/Apple-AirPods-Pro-2/watch-3.jpeg',
  //     width: 1200,
  //     height: 800,
  //     title: 'نمای دیگر',
  //   },
  // ];

  return (
    <div>
      {/* <ProductSlid productImages={productImages} /> */}

      <PdHero />
      <ActionButtons />

    </div>
  )
}

export default page

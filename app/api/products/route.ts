import { NextRequest, NextResponse } from 'next/server';

interface Product {
  id: number;
  slug: string;
  titleFa: string;
  titleEn: string;
  price: number;
  discount: number;
  inventory: boolean;
  category: string;
  brand: string;

  mainImg: string;
  slidsImg: {
    src: string;
    width: number;
    height: number;
    title: string;
  }[];

  importantFeatures: {
    id: number;
    title: string;
    description: string;
  }[];

  pdColors: {
    faName: string;
    enName: string;
    colorCode: string;
  }[];

  longDescription: string;
  productDescription: {
    id: number;
    title: string;
    description: string;
  }[];

  cartOptions: {
    price: number;
    discount: number;
    warranty: string;
  };

  reviews: {
    id: number;
    author: string;
    date: string;
    score: number;
    comment: string;
  }[];
}

const PRODUCTS_DATA: Product[] = [
  // محصول ۱: هدفون بلوتوثی بیتس مدل Solo 4
  {
    id: 1,
    slug: 'beats-solo-4-bluetooth-headphone',
    titleFa: 'هدفون بلوتوثی بیتس مدل Solo 4',
    titleEn: 'Beats Solo 4 Bluetooth Headphone',
    price: 2540000,
    discount: 0,
    inventory: true,
    category: 'هدفون',
    brand: 'بیتس',
    mainImg: '/product-images/Beats-Solo-4/main.jpg',
    slidsImg: [
      { src: '/product-images/Beats-Solo-4/img1.jpg', width: 1200, height: 800, title: 'نمای پشت' },
      { src: '/product-images/Beats-Solo-4/img2.jpg', width: 1200, height: 800, title: 'نمای پهلو' },
      { src: '/product-images/Beats-Solo-4/img3.jpg', width: 1200, height: 800, title: 'نمای دیگر' },
    ],
    importantFeatures: [
      { id: 1, title: 'نویز کنسلینگ', description: 'فعال' },
      { id: 2, title: 'حالت شفافیت', description: 'دارد' },
      { id: 3, title: 'عمر باتری', description: 'تا 6 ساعت پخش موسیقی' },
    ],
    pdColors: [
      { faName: 'قرمز', enName: 'Red', colorCode: '#fc031c' },
      { faName: 'سبز', enName: 'Green', colorCode: '#07e041' },
      { faName: 'زرد', enName: 'Yellow', colorCode: '#e0ce07' },
    ],
    longDescription: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    productDescription: [
      { id: 1, title: 'تراشه', description: 'مجهز به تراشه H2 برای کیفیت صدای بهتر و پردازش هوشمند.' },
      { id: 2, title: 'حذف نویز فعال', description: 'دو برابر عملکرد بهتر در حذف نویز نسبت به نسل قبلی.' },
    ],
    cartOptions: { price: 250000, discount: 0, warranty: 'گارانتی 18 ماهه تجارت لی شاپ' },
    reviews: [
      { id: 1, author: 'علی بهروزی', date: 'تاریخ: 1404/05/22', score: 3, comment: 'این محصول را خریداری کردم و از لحاظ کیفیت ساخت به نظرم می‌توانست بهتر باشد.' },
    ],
  },
  
  // محصول ۲: ایرپاد پرو ۲ اپل
  {
    id: 2,
    slug: 'apple-airpods-pro-2',
    titleFa: 'ایرپاد پرو ۲ اپل',
    titleEn: 'Apple AirPods Pro 2',
    price: 24900000,
    discount: 0,
    inventory: true,
    category: 'هدفون',
    brand: 'اپل',
    mainImg: '/images/airpods-pro-2.jpg',
    slidsImg: [
      { src: '/images/airpods-pro-2-1.jpg', width: 1200, height: 800, title: 'نمای اصلی' },
    ],
    importantFeatures: [
      { id: 1, title: 'نویز کنسلینگ', description: 'فعال' },
      { id: 2, title: 'حالت شفافیت', description: 'دارد' },
      { id: 3, title: 'عمر باتری', description: 'تا 6 ساعت پخش موسیقی' },
    ],
    pdColors: [
      { faName: 'سفید', enName: 'White', colorCode: '#ffffff' },
    ],
    longDescription: 'یکی از بهترین هدفون‌های بی‌سیم موجود در بازار با کیفیت صدای عالی و نویز کنسلینگ بی‌نظیر.',
    productDescription: [
      { id: 1, title: 'تراشه', description: 'مجهز به تراشه H2 برای کیفیت صدای بهتر و پردازش هوشمند.' },
      { id: 2, title: 'حذف نویز فعال', description: 'دو برابر عملکرد بهتر در حذف نویز نسبت به نسل قبلی.' },
      { id: 3, title: 'حالت شفافیت تطبیقی', description: 'کاهش صدای محیطی بلند، مانند آژیر و صدای ساخت و ساز.' },
    ],
    cartOptions: { price: 24900000, discount: 0, warranty: 'گارانتی اصالت کالا' },
    reviews: [
      { id: 1, author: 'علی', date: 'تاریخ: 1404/05/22', score: 5, comment: 'واقعا از خریدم رافیم!' },
      { id: 2, author: 'سارا', date: 'تاریخ: 1404/05/20', score: 4, comment: 'قیمتش بالاست ولی کیفیتش ارزش داره.' },
    ],
  },
  
  // محصول ۳: گلکسی بادز ۲ پرو سامسونگ
  {
    id: 3,
    slug: 'samsung-galaxy-buds-2-pro',
    titleFa: 'گلکسی بادز ۲ پرو سامسونگ',
    titleEn: 'Samsung Galaxy Buds 2 Pro',
    price: 17900000,
    discount: 0,
    inventory: true,
    category: 'هدفون',
    brand: 'سامسونگ',
    mainImg: '/images/galaxy-buds-2-pro.jpg',
    slidsImg: [
      { src: '/images/galaxy-buds-2-pro-1.jpg', width: 1200, height: 800, title: 'نمای کلی' },
    ],
    importantFeatures: [
      { id: 1, title: 'نویز کنسلینگ', description: 'فعال' },
      { id: 2, title: 'صدای Hi-Fi', description: '24-bit Audio' },
      { id: 3, title: 'ضد آب', description: 'IPX7' },
    ],
    pdColors: [
      { faName: 'سفید', enName: 'White', colorCode: '#ffffff' },
      { faName: 'مشکی', enName: 'Graphite', colorCode: '#36454F' },
      { faName: 'بنفش', enName: 'Bora Purple', colorCode: '#6A0DAD' },
    ],
    longDescription: 'طراحی ارگونومیک، صدای عالی و نویز کنسلینگ موثر. انتخاب خوبی برای کاربران اندروید.',
    productDescription: [
      { id: 1, title: 'ضد آب', description: 'دارای استاندارد IPX7 برای مقاومت در برابر تعریق و آب.' },
    ],
    cartOptions: { price: 17900000, discount: 0, warranty: 'گارانتی ۱۸ ماهه' },
    reviews: [
      { id: 1, author: 'رضا', date: 'تاریخ: 1404/05/18', score: 5, comment: 'خیلی خوب تو گوش میشینه.' },
    ],
  },
  
  // محصول ۴: اپل واچ سری 10
  {
    id: 4,
    slug: 'apple-watch-series-10',
    titleFa: 'اپل واچ سری 10',
    titleEn: 'Apple Watch Series 10',
    price: 39900000,
    discount: 0,
    inventory: true,
    category: 'ساعت هوشمند',
    brand: 'اپل',
    mainImg: '/images/apple-watch-series-9.jpg',
    slidsImg: [
      { src: '/images/apple-watch-series-9-1.jpg', width: 1200, height: 800, title: 'نمای جلویی' },
    ],
    importantFeatures: [
      { id: 1, title: 'صفحه نمایش', description: 'Always-On Retina' },
      { id: 2, title: 'سنسور اکسیژن خون', description: 'دارد' },
      { id: 3, title: 'قابلیت Double Tap', description: 'جدید' },
    ],
    pdColors: [
      { faName: 'نیمه شب', enName: 'Midnight', colorCode: '#2C3E50' },
      { faName: 'نور ستاره', enName: 'Starlight', colorCode: '#F4F6F7' },
      { faName: 'نقره‌ای', enName: 'Silver', colorCode: '#BDC3C7' },
      { faName: 'صورتی', enName: 'Pink', colorCode: '#F5B7B1' },
    ],
    longDescription: 'جدیدترین ساعت هوشمند اپل با پردازنده قوی‌تر و امکانات سلامت پیشرفته.',
    productDescription: [], // توضیحات فنی می‌تواند خالی باشد
    cartOptions: { price: 39900000, discount: 0, warranty: 'گارانتی ۱۸ ماهه اپل' },
    reviews: [], // نظرات می‌تواند خالی باشد
  },
  
  // محصول ۵: پلی استیشن ۵ سونی
  {
    id: 5,
    slug: 'sony-playstation-5',
    titleFa: 'پلی استیشن ۵ سونی',
    titleEn: 'Sony PlayStation 5',
    price: 49900000,
    discount: 0,
    inventory: true,
    category: 'کنسول بازی',
    brand: 'سونی',
    mainImg: '/images/ps5.jpg',
    slidsImg: [
      { src: '/images/ps5-1.jpg', width: 1200, height: 800, title: 'کنسول و دسته' },
    ],
    importantFeatures: [
      { id: 1, title: 'SSD فوق سریع', description: 'بارگذاری سریع بازی‌ها' },
      { id: 2, title: 'گرافیک 4K', description: 'پشتیبانی از 120Hz' },
    ],
    pdColors: [
      { faName: 'سفید', enName: 'White', colorCode: '#ffffff' },
    ],
    longDescription: 'نسل جدید کنسول‌های بازی با گرافیک خیره کننده و تجربه‌ی بازی روان.',
    productDescription: [],
    cartOptions: { price: 49900000, discount: 0, warranty: 'گارانتی ۱۲ ماهه' },
    reviews: [
      { id: 1, author: 'سینا', date: 'تاریخ: 1404/05/16', score: 5, comment: 'عالیه! بهترین کنسول بازی که داشتم.' },
    ],
  },

  // محصول ۶: پاور بانک انکر
  {
    id: 6,
    slug: 'anker-powercore-20000',
    titleFa: 'پاور بانک انکر مدل PowerCore 20000',
    titleEn: 'Anker PowerCore 20000',
    price: 7500000,
    discount: 0,
    inventory: false,
    category: 'پاور بانک',
    brand: 'انکر',
    mainImg: '/images/anker-powerbank.jpg',
    slidsImg: [],
    importantFeatures: [
      { id: 1, title: 'ظرفیت', description: '20000mAh' },
      { id: 2, title: 'پورت‌ها', description: 'USB-C, USB-A' },
    ],
    pdColors: [
      { faName: 'مشکی', enName: 'Black', colorCode: '#000000' },
    ],
    longDescription: 'پاور بانک قدرتمند با ظرفیت بالا برای شارژ چندین دستگاه.',
    productDescription: [],
    cartOptions: { price: 7500000, discount: 0, warranty: 'گارانتی 6 ماهه' },
    reviews: [],
  },

  // محصول ۷: می بند ۸ شیائومی
  {
    id: 7,
    slug: 'xiaomi-mi-band-8',
    titleFa: 'می بند ۸ شیائومی',
    titleEn: 'Xiaomi Mi Band 8',
    price: 4500000,
    discount: 0,
    inventory: true,
    category: 'مچ بند هوشمند',
    brand: 'شیائومی',
    mainImg: '/images/xiaomi-band-8.jpg',
    slidsImg: [],
    importantFeatures: [
      { id: 1, title: 'صفحه نمایش', description: 'AMOLED' },
      { id: 2, title: 'عمر باتری', description: 'تا 16 روز' },
      { id: 3, title: 'ضد آب', description: '5ATM' },
    ],
    pdColors: [
      { faName: 'مشکی', enName: 'Black', colorCode: '#000000' },
      { faName: 'طلایی', enName: 'Gold', colorCode: '#FFD700' },
    ],
    longDescription: 'یک مچ بند هوشمند اقتصادی با قابلیت‌های ردیابی فعالیت و سلامت.',
    productDescription: [],
    cartOptions: { price: 4500000, discount: 0, warranty: 'گارانتی 12 ماهه' },
    reviews: [],
  },

  // محصول ۸: اسپیکر جی‌بی‌ال فلیپ ۶
  {
    id: 8,
    slug: 'jbl-flip-6',
    titleFa: 'اسپیکر جی‌بی‌ال فلیپ ۶',
    titleEn: 'JBL Flip 6',
    price: 8000000,
    discount: 0,
    inventory: true,
    category: 'اسپیکر',
    brand: 'جی‌بی‌ال',
    mainImg: '/images/jbl-flip-6.jpg',
    slidsImg: [],
    importantFeatures: [
      { id: 1, title: 'توان خروجی', description: '20W RMS' },
      { id: 2, title: 'ضد آب و گرد و غبار', description: 'IP67' },
      { id: 3, title: 'عمر باتری', description: 'تا 12 ساعت' },
    ],
    pdColors: [
      { faName: 'مشکی', enName: 'Black', colorCode: '#000000' },
      { faName: 'آبی', enName: 'Blue', colorCode: '#0000FF' },
      { faName: 'قرمز', enName: 'Red', colorCode: '#FF0000' },
      { faName: 'صورتی', enName: 'Pink', colorCode: '#FFC0CB' },
    ],
    longDescription: 'اسپیکر قابل حمل با صدای قدرتمند و بیس عمیق، مناسب مهمانی‌ها.',
    productDescription: [],
    cartOptions: { price: 8000000, discount: 0, warranty: 'گارانتی ۱۲ ماهه' },
    reviews: [],
  },

  // محصول ۹: ماوس لاجیتک
  {
    id: 9,
    slug: 'logitech-g-pro-x-superlight',
    titleFa: 'ماوس لاجیتک G Pro X Superlight',
    titleEn: 'Logitech G Pro X Superlight',
    price: 15000000,
    discount: 0,
    inventory: true,
    category: 'لوازم جانبی',
    brand: 'لاجیتک',
    mainImg: '/images/logitech-mouse.jpg',
    slidsImg: [],
    importantFeatures: [
      { id: 1, title: 'وزن', description: 'کمتر از 63 گرم' },
      { id: 2, title: 'حسگر', description: 'HERO 25K' },
      { id: 3, title: 'اتصال', description: 'بی‌سیم LIGHTSPEED' },
    ],
    pdColors: [
      { faName: 'مشکی', enName: 'Black', colorCode: '#000000' },
      { faName: 'سفید', enName: 'White', colorCode: '#ffffff' },
    ],
    longDescription: 'ماوس گیمینگ فوق سبک و با دقت بالا، محبوب گیمرهای حرفه‌ای.',
    productDescription: [],
    cartOptions: { price: 15000000, discount: 0, warranty: 'گارانتی ۱۸ ماهه' },
    reviews: [],
  },
];

export async function GET(request: NextRequest) { 
  const { searchParams } = request.nextUrl; 

  const category = searchParams.getAll('category'); 
  const brand = searchParams.getAll('brand');       
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const searchTerm = searchParams.get('searchTerm');
  const inventory = searchParams.get('inventory');
  const color = searchParams.get('color');
  const _limit = searchParams.get('_limit');
  const _page = searchParams.get('_page');
  const _sort = searchParams.get('_sort');
  const _order = searchParams.get('_order');

  let filteredProducts: Product[] = PRODUCTS_DATA; 

  if (category && category.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      category.includes(product.category)
    );
  }
  if (brand && brand.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      brand.includes(product.brand)
    );
  }

  if (minPrice && typeof minPrice === 'string' && !isNaN(parseFloat(minPrice))) {
    filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
  }

  if (maxPrice && typeof maxPrice === 'string' && !isNaN(parseFloat(maxPrice))) {
    filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
  }

  if (inventory !== undefined) {
    const desiredInventoryStatus = String(inventory).toLowerCase() === 'true';
    filteredProducts = filteredProducts.filter(product => product.inventory === desiredInventoryStatus);
  }

  if (color && typeof color === 'string') {
    const lowerCaseColor = color.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.pdColors.some(c => 
        c.faName.toLowerCase().includes(lowerCaseColor) || c.enName.toLowerCase().includes(lowerCaseColor)
      )
    );
  }

  if (searchTerm && typeof searchTerm === 'string') {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.titleFa.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.titleEn.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.brand.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
      // Search in important features
      product.importantFeatures.some(f => 
        f.title.toLowerCase().includes(lowerCaseSearchTerm) || f.description.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  }

  if (_sort && typeof _sort === 'string') {
    const sortField = _sort as keyof Product;
    const sortOrder = String(_order).toLowerCase() === 'desc' ? 'desc' : 'asc';

    filteredProducts.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      return 0;
    });
  }

  let paginatedProducts = filteredProducts;
  if (_limit && typeof _limit === 'string' && !isNaN(parseInt(_limit))) {
    const limit = parseInt(_limit);
    let page = 1;
    if (_page && typeof _page === 'string' && !isNaN(parseInt(_page))) {
      page = parseInt(_page);
    }
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  }

  if (paginatedProducts.length > 0) {
    return NextResponse.json(paginatedProducts, { status: 200 }); 
  } else {
    return NextResponse.json({ message: 'No products found matching your criteria.' }, { status: 404 }); 
  }
}

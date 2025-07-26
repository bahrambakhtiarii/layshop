import { NextRequest, NextResponse } from 'next/server';

interface ProductImportantFeatures {
  title: string;
  description: string;
}

interface ProductComments {
  title: string;
  description: string;
  author: string;
  score: number;
}

interface ProductSpecifications {
  brand: string;
  category: string;
  colors: string[];
}

interface Product {
  id: string;
  img: string;
  brand: string;
  category: string;
  inventory: boolean;
  price: number;
  discount: number; 
  titleFa: string;
  titleEn: string;
  colors: string[];
  importantFeatures: ProductImportantFeatures[];
  review: string;
  specifications: ProductSpecifications;
  comments: ProductComments[];
}

const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    img: '/images/airpods-pro-2.jpg',
    brand: 'Apple',
    category: 'headphone',
    inventory: true,
    price: 24900000,
    discount: 0,
    titleFa: 'ایرپاد پرو ۲ اپل',
    titleEn: 'Apple AirPods Pro 2',
    colors: ['White'],
    importantFeatures: [
      { title: 'نویز کنسلینگ', description: 'فعال' },
      { title: 'حالت شفافیت', description: 'دارد' },
      { title: 'عمر باتری', description: 'تا 6 ساعت پخش موسیقی' },
    ],
    review: 'یکی از بهترین هدفون‌های بی‌سیم موجود در بازار با کیفیت صدای عالی و نویز کنسلینگ بی‌نظیر.',
    specifications: {
      brand: 'Apple',
      category: 'headphone',
      colors: ['White'],
    },
    comments: [
      { title: 'کیفیت عالی', description: 'واقعا از خریدم رافیم!', author: 'علی', score: 5 },
      { title: 'گران است', description: 'قیمتش بالاست ولی کیفیتش ارزش داره.', author: 'سارا', score: 4 },
    ],
  },
  {
    id: '2',
    img: '/images/galaxy-buds-2-pro.jpg',
    brand: 'Samsung',
    category: 'headphone',
    inventory: true,
    price: 17900000,
    discount: 0,
    titleFa: 'گلکسی بادز ۲ پرو سامسونگ',
    titleEn: 'Samsung Galaxy Buds 2 Pro',
    colors: ['Graphite', 'White', 'Bora Purple'],
    importantFeatures: [
      { title: 'نویز کنسلینگ', description: 'فعال' },
      { title: 'صدای Hi-Fi', description: '24-bit Audio' },
      { title: 'ضد آب', description: 'IPX7' },
    ],
    review: 'طراحی ارگونومیک، صدای عالی و نویز کنسلینگ موثر. انتخاب خوبی برای کاربران اندروید.',
    specifications: {
      brand: 'Samsung',
      category: 'headphone',
      colors: ['Graphite', 'White', 'Bora Purple'],
    },
    comments: [
      { title: 'راحت و سبک', description: 'خیلی خوب تو گوش میشینه.', author: 'رضا', score: 5 },
    ],
  },
  {
    id: '3',
    img: '/images/apple-watch-series-9.jpg',
    brand: 'Apple',
    category: 'smartwatch',
    inventory: true,
    price: 39900000,
    discount: 0,
    titleFa: 'اپل واچ سری ۹',
    titleEn: 'Apple Watch Series 9',
    colors: ['Midnight', 'Starlight', 'Silver', 'Pink'],
    importantFeatures: [
      { title: 'صفحه نمایش', description: 'Always-On Retina' },
      { title: 'سنسور اکسیژن خون', description: 'دارد' },
      { title: 'قابلیت Double Tap', description: 'جدید' },
    ],
    review: 'جدیدترین ساعت هوشمند اپل با پردازنده قوی‌تر و امکانات سلامت پیشرفته.',
    specifications: {
      brand: 'Apple',
      category: 'smartwatch',
      colors: ['Midnight', 'Starlight', 'Silver', 'Pink'],
    },
    comments: [],
  },
  {
    id: '4',
    img: '/images/ps5.jpg',
    brand: 'Sony',
    category: 'gaming-console',
    inventory: true,
    price: 49900000,
    discount: 0,
    titleFa: 'پلی استیشن ۵ سونی',
    titleEn: 'Sony PlayStation 5',
    colors: ['White', 'Black (Digital Edition)'],
    importantFeatures: [
      { title: 'SSD فوق سریع', description: 'بارگذاری سریع بازی‌ها' },
      { title: 'گرافیک 4K', description: 'پشتیبانی از 120Hz' },
    ],
    review: 'نسل جدید کنسول‌های بازی با گرافیک خیره کننده و تجربه‌ی بازی روان.',
    specifications: {
      brand: 'Sony',
      category: 'gaming-console',
      colors: ['White', 'Black'],
    },
    comments: [
      { title: 'عالیه!', description: 'بهترین کنسول بازی که داشتم.', author: 'سینا', score: 5 },
    ],
  },
  {
    id: '5',
    img: '/images/anker-powerbank.jpg',
    brand: 'Anker',
    category: 'powerbank',
    inventory: false,
    price: 7500000,
    discount: 0,
    titleFa: 'پاور بانک انکر مدل PowerCore 20000',
    titleEn: 'Anker PowerCore 20000',
    colors: ['Black'],
    importantFeatures: [
      { title: 'ظرفیت', description: '20000mAh' },
      { title: 'پورت‌ها', description: 'USB-C, USB-A' },
    ],
    review: 'پاور بانک قدرتمند با ظرفیت بالا برای شارژ چندین دستگاه.',
    specifications: {
      brand: 'Anker',
      category: 'powerbank',
      colors: ['Black'],
    },
    comments: [],
  },
  {
    id: '6',
    img: '/images/xiaomi-band-8.jpg',
    brand: 'Xiaomi',
    category: 'smartband',
    inventory: true,
    price: 4500000,
    discount: 0,
    titleFa: 'می بند ۸ شیائومی',
    titleEn: 'Xiaomi Mi Band 8',
    colors: ['Black', 'Gold'],
    importantFeatures: [
      { title: 'صفحه نمایش', description: 'AMOLED' },
      { title: 'عمر باتری', description: 'تا 16 روز' },
      { title: 'ضد آب', description: '5ATM' },
    ],
    review: 'یک مچ بند هوشمند اقتصادی با قابلیت‌های ردیابی فعالیت و سلامت.',
    specifications: {
      brand: 'Xiaomi',
      category: 'smartband',
      colors: ['Black', 'Gold'],
    },
    comments: [],
  },
  {
    id: '7',
    img: '/images/jbl-flip-6.jpg',
    brand: 'JBL',
    category: 'speaker',
    inventory: true,
    price: 8000000,
    discount: 0,
    titleFa: 'اسپیکر جی‌بی‌ال فلیپ ۶',
    titleEn: 'JBL Flip 6',
    colors: ['Black', 'Blue', 'Red', 'Pink'],
    importantFeatures: [
      { title: 'توان خروجی', description: '20W RMS' },
      { title: 'ضد آب و گرد و غبار', description: 'IP67' },
      { title: 'عمر باتری', description: 'تا 12 ساعت' },
    ],
    review: 'اسپیکر قابل حمل با صدای قدرتمند و بیس عمیق، مناسب مهمانی‌ها.',
    specifications: {
      brand: 'JBL',
      category: 'speaker',
      colors: ['Black', 'Blue', 'Red', 'Pink'],
    },
    comments: [],
  },
  {
    id: '8',
    img: '/images/logitech-mouse.jpg',
    brand: 'Logitech',
    category: 'accessory',
    inventory: true,
    price: 15000000,
    discount: 0,
    titleFa: 'ماوس لاجیتک G Pro X Superlight',
    titleEn: 'Logitech G Pro X Superlight',
    colors: ['Black', 'White'],
    importantFeatures: [
      { title: 'وزن', description: 'کمتر از 63 گرم' },
      { title: 'حسگر', description: 'HERO 25K' },
      { title: 'اتصال', description: 'بی‌سیم LIGHTSPEED' },
    ],
    review: 'ماوس گیمینگ فوق سبک و با دقت بالا، محبوب گیمرهای حرفه‌ای.',
    specifications: {
      brand: 'Logitech',
      category: 'accessory',
      colors: ['Black', 'White'],
    },
    comments: [],
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
      product.colors.some(c => c.toLowerCase().includes(lowerCaseColor))
    );
  }

  if (searchTerm && typeof searchTerm === 'string') {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.titleFa.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.titleEn.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.brand.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.category.toLowerCase().includes(lowerCaseSearchTerm)
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







/*

import type { Product } from '../data/products-data'; // مسیر را بر اساس جایگاه فایل خود تنظیم کنید.

// 2. تعریف تابع برای واکشی داده‌ها
// این تابع در سمت سرور اجرا می‌شود.
async function getProducts(category?: string, brand?: string): Promise<Product[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // آدرس اصلی API شما

  // ساخت Query String برای API
  const query = new URLSearchParams();
  if (category) {
    query.append('category', category); // اگر دسته بندی خاصی درخواست شده
  }
  if (brand) {
    query.append('brand', brand);       // اگر برند خاصی درخواست شده
  }

  try {
    const apiUrl = `${baseUrl}/api/products?${query.toString()}`;
    // console.log(`DEBUG: Fetching from: ${apiUrl}`); // برای دیباگ کردن مفید است

    const res = await fetch(apiUrl, {
      // cache: 'no-store' تضمین می‌کند که هر بار درخواست جدیدی به API زده شود
      cache: 'no-store'
    });

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      return []; // در صورت خطا، یک آرایه خالی برگردانید.
    }

    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // در صورت خطا، یک آرایه خالی برگردانید.
  }
}

// 3. کامپوننت اصلی صفحه
export default async function HomePage() {
  // فراخوانی API برای گرفتن لیست "ساعت هوشمند" از برند "Apple"
  const appleSmartwatches = await getProducts('smartwatch', 'Apple');

  // فراخوانی API برای گرفتن لیست "همه هدفون‌ها"
  const allHeadphones = await getProducts('headphone');

  // فراخوانی API برای گرفتن لیست "پاوربانک‌های موجود"
  const availablePowerbanks = await getProducts('powerbank', undefined); // بدون فیلتر برند خاص



*/
import type { NextApiRequest, NextApiResponse } from "next";


interface ProductImportantFeatures{
    title: string;
    description: string;
}
interface ProductComents{
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
    comments: ProductComents[];
}

const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    img: '/images/airpods-pro-2.jpg',
    brand: 'Apple',
    category: 'headphone',
    inventory: true,
    price: 24900000, // Example price in Toman
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
      { title: 'کیفیت عالی', description: 'واقعا از خریدم راضیم!', author: 'علی', score: 5 },
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
    inventory: false, // Example of out of stock product
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
    category: 'smartband', // New category for smartbands
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
    category: 'speaker', // New category for speakers
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
    category: 'accessory', // Used 'accessory' for general accessories
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

export default function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).json({message: 'Method Not Allowed'});
    } 

    const { category, brand, minPrice, maxPrice, searchTerm, inventory, color, _limit, _page, _sort, _order } = req.query;

    let filteredProducts = PRODUCTS_DATA;


    if (category) {
        const categories = Array.isArray(category) ? category : [category];
        filteredProducts = filteredProducts.filter(product =>
        categories.includes(product.category)
        );
    }
    if (brand) {
        const brands = Array.isArray(brand) ? brand : [brand];
        filteredProducts = filteredProducts.filter(product =>
        brands.includes(product.brand)
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
        const sortField = _sort as keyof Product; // Ensure sortField is a valid key of Product
        const sortOrder = String(_order).toLowerCase() === 'desc' ? 'desc' : 'asc'; // 'asc' by default

        filteredProducts.sort((a, b) => {
        // Basic sorting for numbers and strings. Extend as needed.
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        }
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return 0; // No sorting for other types or mixed types
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
        res.status(200).json(paginatedProducts);
    } else {
        res.status(404).json({ message: 'No products found matching your criteria.' });
    }
}

/** 
چگونه این API را فراخوانی کنیم (مثال‌ها):

تمام محصولات:
GET /api/products

فیلتر بر اساس یک دسته‌بندی خاص (مثلاً هدفون):
GET /api/products?category=headphone

فیلتر بر اساس چندین دسته‌بندی (مثلاً هدفون و ساعت هوشمند):
GET /api/products?category=headphone&category=smartwatch
(Next.js این را به عنوان یک آرایه ['headphone', 'smartwatch'] در req.query.category دریافت می‌کند.)

فیلتر بر اساس برند (مثلاً Apple):
GET /api/products?brand=Apple

فیلتر بر اساس دسته‌بندی و برند (مثلاً ایرپادهای اپل):
GET /api/products?category=headphone&brand=Apple

فیلتر بر اساس حداقل قیمت (مثلاً بالای ۱۵ میلیون تومان):
GET /api/products?minPrice=15000000

فیلتر بر اساس حداکثر قیمت (مثلاً زیر ۱۰ میلیون تومان):
GET /api/products?maxPrice=10000000

جستجو (مثلاً جستجوی "Galaxy" در عنوان محصول):
GET /api/products?searchTerm=galaxy

محصولات موجود در انبار (inventory: true):
GET /api/products?inventory=true

محصولات ناموجود در انبار (inventory: false):
GET /api/products?inventory=false

فیلتر بر اساس رنگ (مثلاً محصولاتی که شامل رنگ "Black" هستند):
GET /api/products?color=black

صفحه‌بندی (۱۰ محصول در صفحه اول):
GET /api/products?_limit=10&_page=1

مرتب‌سازی (بر اساس قیمت به صورت صعودی):
GET /api/products?_sort=price&_order=asc

مرتب‌سازی (بر اساس قیمت به صورت نزولی):
GET /api/products?_sort=price&_order=desc

ترکیب فیلترها، جستجو و صفحه‌بندی (مثلاً ساعت هوشمند سامسونگ، موجود در انبار، که کلمه "Watch" در آن باشد، صفحه ۱، ۲ محصول در هر صفحه):
GET /api/products?category=smartwatch&brand=Samsung&inventory=true&searchTerm=Watch&_limit=2&_page=1

 **/
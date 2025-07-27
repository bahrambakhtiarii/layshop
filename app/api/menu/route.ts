import { NextRequest, NextResponse } from 'next/server';

export interface SubMenuItem {
  title: string;
  linkTo: string;
}

export interface SubCategoryMenu {
  title: string;
  items: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  subCategories?: SubCategoryMenu[];
}

const MENU_DATA: MenuItem[] = [
  {
    id: 'smart-watches-bands',
    title: 'مچ بند و ساعت هوشمند',
    icon: '/mega-menu-icons/smart-watch.png',
    subCategories: [
      {
        title: 'ساعت هوشمند',
        items: [
          { title: 'ساعت شیائومی', linkTo: '/products?category=smartwatch&brand=Xiaomi' },
          { title: 'ساعت اپل', linkTo: '/products?category=smartwatch&brand=Apple' },
          { title: 'ساعت سامسونگ', linkTo: '/products?category=smartwatch&brand=Samsung' },
          { title: 'همه ساعت‌های هوشمند', linkTo: '/products?category=smartwatch' },
        ],
      },
      {
        title: 'مچ بند هوشمند',
        items: [
          { title: 'مچ بند شیائومی', linkTo: '/products?category=smartband&brand=Xiaomi' },
          { title: 'مچ بند سامسونگ', linkTo: '/products?category=smartband&brand=Samsung' },
          { title: 'همه مچ بندهای هوشمند', linkTo: '/products?category=smartband' },
        ],
      },
      {
        title: 'لوازم جانبی ساعت هوشمند',
        items: [
          { title: 'بند ساعت هوشمند', linkTo: '/products?category=smartwatch-accessories&type=band' },
          { title: 'شارژر ساعت هوشمند', linkTo: '/products?category=smartwatch-accessories&type=charger' },
          { title: 'محافظ صفحه ساعت', linkTo: '/products?category=smartwatch-accessories&type=screen-protector' },
          { title: 'همه لوازم جانبی ساعت', linkTo: '/products?category=smartwatch-accessories' },
        ],
      },
      {
        title: 'برندهای محبوب ساعت هوشمند',
        items: [
          { title: 'ساعت هوشمند Amazfit', linkTo: '/products?category=smartwatch&brand=Amazfit' },
          { title: 'ساعت هوشمند Huawei', linkTo: '/products?category=smartwatch&brand=Huawei' },
          { title: 'ساعت هوشمند Garmin', linkTo: '/products?category=smartwatch&brand=Garmin' },
          { title: 'مشاهده همه برندها', linkTo: '/products?category=smartwatch&view=brands' },
        ],
      },
      {
        title: 'ساعت‌های کودک و سالمندان',
        items: [
          { title: 'ساعت هوشمند کودک', linkTo: '/products?category=kids-smartwatch' },
          { title: 'ساعت هوشمند سالمندان', linkTo: '/products?category=elderly-smartwatch' },
          { title: 'ساعت‌های سیم‌کارت‌خور', linkTo: '/products?category=smartwatch&feature=sim-card' },
          { title: 'ساعت‌های مخصوص ورزش', linkTo: '/products?category=smartwatch&feature=sport' },
        ],
      },
    ],
  },
  {
    id: 'power-banks',
    title: 'پاور بانک',
    icon: '/mega-menu-icons/power-bank.png',
    subCategories: [
      {
        title: 'برند',
        items: [
          { title: 'پاور بانک سامسونگ', linkTo: '/products?category=powerbank&brand=Samsung' },
          { title: 'پاور بانک شیائومی', linkTo: '/products?category=powerbank&brand=Xiaomi' },
          { title: 'پاور بانک گرین لاین', linkTo: '/products?category=powerbank&brand=GreenLine' },
          { title: 'پاور بانک انکر', linkTo: '/products?category=powerbank&brand=Anker' },
          { title: 'پاور بانک پاورولوژی', linkTo: '/products?category=powerbank&brand=Powerology' },
          { title: 'همه برندها', linkTo: '/products?category=powerbank' },
        ],
      },
      {
        title: 'ویژگی خاص',
        items: [
          { title: 'وایرلس شارژ', linkTo: '/products?category=powerbank&feature=wireless-charge' },
          { title: 'فست شارژ', linkTo: '/products?category=powerbank&feature=fast-charge' },
          { title: 'ظرفیت بالا', linkTo: '/products?category=powerbank&feature=high-capacity' },
        ],
      },
      {
        title: 'ظرفیت (mAh)',
        items: [
          { title: 'زیر 10000', linkTo: '/products?category=powerbank&maxCapacity=10000' },
          { title: '10000 تا 20000', linkTo: '/products?category=powerbank&minCapacity=10000&maxCapacity=20000' },
          { title: 'بالای 20000', linkTo: '/products?category=powerbank&minCapacity=20000' },
        ]
      }
    ],
  },
  {
    id: 'gaming-consoles',
    title: 'کنسول بازی',
    icon: '/mega-menu-icons/gaming-console.png',
    subCategories: [
      {
        title: 'برند',
        items: [
          { title: 'پلی استیشن', linkTo: '/products?category=gaming-console&brand=Sony' },
          { title: 'ایکس باکس', linkTo: '/products?category=gaming-console&brand=Microsoft' },
          { title: 'نینتندو', linkTo: '/products?category=gaming-console&brand=Nintendo' },
          { title: 'همه کنسول‌ها', linkTo: '/products?category=gaming-console' },
        ],
      },
      {
        title: 'لوازم جانبی کنسول',
        items: [
          { title: 'دسته بازی', linkTo: '/products?category=accessory&type=controller' },
          { title: 'هدست گیمینگ', linkTo: '/products?category=accessory&type=gaming-headset' },
        ],
      },
    ],
  },
  {
    id: 'chargers-cables',
    title: 'شارژر و کابل',
    icon: '/mega-menu-icons/charger-cable.png',
    subCategories: [
      {
        title: 'شارژر دیواری',
        items: [
          { title: 'شارژر دیواری اپل', linkTo: '/products?category=charger&type=wall-charger&brand=Apple' },
          { title: 'شارژر دیواری سامسونگ', linkTo: '/products?category=charger&type=wall-charger&brand=Samsung' },
          { title: 'همه شارژرهای دیواری', linkTo: '/products?category=charger&type=wall-charger' },
        ],
      },
      {
        title: 'کابل شارژ',
        items: [
          { title: 'کابل لایتنینگ', linkTo: '/products?category=cable&type=lightning' },
          { title: 'کابل USB-C', linkTo: '/products?category=cable&type=usb-c' },
          { title: 'کابل Micro USB', linkTo: '/products?category=cable&type=micro-usb' },
          { title: 'همه کابل‌ها', linkTo: '/products?category=cable' },
        ],
      },
      {
        title: 'شارژر فندکی',
        items: [
          { title: 'همه شارژرهای فندکی', linkTo: '/products?category=charger&type=car-charger' },
        ],
      },
    ],
  },
  {
    id: 'speakers',
    title: 'اسپیکر',
    icon: '/mega-menu-icons/speaker.png',
    subCategories: [
      {
        title: 'نوع اسپیکر',
        items: [
          { title: 'اسپیکر قابل حمل', linkTo: '/products?category=speaker&type=portable' },
          { title: 'اسپیکر خانگی', linkTo: '/products?category=speaker&type=home' },
          { title: 'ساندبار', linkTo: '/products?category=speaker&type=soundbar' },
        ],
      },
      {
        title: 'برند',
        items: [
          { title: 'اسپیکر JBL', linkTo: '/products?category=speaker&brand=JBL' },
          { title: 'اسپیکر سونی', linkTo: '/products?category=speaker&brand=Sony' },
          { title: 'اسپیکر هارمن کاردن', linkTo: '/products?category=speaker&brand=HarmanKardon' },
          { title: 'همه برندها', linkTo: '/products?category=speaker' },
        ],
      },
    ],
  },
  {
    id: 'earbuds-headphones',
    title: 'ایرپاد و هدفون',
    icon: '/mega-menu-icons/earbud-headphone.png',
    subCategories: [
      {
        title: 'نوع اتصال',
        items: [
          { title: 'هدفون بی‌سیم', linkTo: '/products?category=headphone&connection=wireless' },
          { title: 'هدفون باسیم', linkTo: '/products?category=headphone&connection=wired' },
        ],
      },
      {
        title: 'برند',
        items: [
          { title: 'ایرپاد اپل', linkTo: '/products?category=headphone&brand=Apple' },
          { title: 'هدفون سامسونگ', linkTo: '/products?category=headphone&brand=Samsung' },
          { title: 'هدفون سونی', linkTo: '/products?category=headphone&brand=Sony' },
          { title: 'هدفون JBL', linkTo: '/products?category=headphone&brand=JBL' },
          { title: 'هدفون شیائومی', linkTo: '/products?category=headphone&brand=Xiaomi' },
          { title: 'همه برندها', linkTo: '/products?category=headphone' },
        ],
      },
      {
        title: 'قابلیت‌ها',
        items: [
          { title: 'نویز کنسلینگ', linkTo: '/products?category=headphone&feature=noise-cancelling' },
          { title: 'ضد آب', linkTo: '/products?category=headphone&feature=waterproof' },
          { title: 'گیمینگ', linkTo: '/products?category=headphone&feature=gaming' },
        ],
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  

  return NextResponse.json(MENU_DATA, { status: 200 });
}

/*

export interface SubMenuItem {
  title: string;
  linkTo: string;
}

export interface SubCategoryMenu {
  title: string;
  items: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  subCategories?: SubCategoryMenu[];
}

// 1. تابع async برای واکشی داده‌ها از API
// این تابع در سمت سرور اجرا می‌شود.
async function getMenuData(): Promise<MenuItem[]> {
  try {
    // نکته: برای fetch کردن از API Routes خودتان در Server Components،
    // باید از آدرس کامل (شامل پروتکل و هاست) استفاده کنید.
    // 'http://localhost:3000' برای توسعه محلی است. در محیط پروداکشن، باید آدرس دامنه شما باشد.
    // بهتر است این آدرس را از متغیرهای محیطی (.env.local) بخوانید.
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // fetch کردن داده‌ها از API Route خودتان
    const res = await fetch(`${baseUrl}/api/menu`, {
      // این 옵tion باعث می‌شود که داده‌ها در هر درخواست (On-Demand) جدید باشند.
      // اگر نمی‌خواهید داده‌ها همیشه جدید باشند (مثلاً یک بار در روز کافیست)، می‌توانید از { next: { revalidate: 86400 } } استفاده کنید.
      cache: 'no-store' // این تضمین می‌کند که هر بار درخواست جدیدی به API زده شود
    });

    if (!res.ok) {
      // اگر پاسخ موفقیت‌آمیز نبود، خطا پرتاب کن
      console.error(`Failed to fetch menu data: ${res.status} ${res.statusText}`);
      // می‌توانید یک پیام خطا برگردانید یا یک آرایه خالی برای هندل کردن در UI
      return [];
    }

    const data: MenuItem[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return []; // در صورت خطا، یک آرایه خالی برگردانید
  }
}





const menuItems = await getMenuData();

*/
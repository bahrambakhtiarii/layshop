import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS_DATA, Product } from '../../../../data/products-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: 'Product ID is required.' }, { status: 400 });
  }

  const product = PRODUCTS_DATA.find(p => p.id === id);

  if (product) {
    return NextResponse.json(product, { status: 200 });
  } else {
    return NextResponse.json({ message: `Product with ID ${id} not found.` }, { status: 404 });
  }
}


/*

// app/products/[id]/page.tsx
// این یک Server Component است.

// 1. وارد کردن Type ها
// مسیر import را بر اساس محل قرارگیری فایل products-data.ts در پروژه خود تنظیم کنید.
import type { ProductImportantFeatures, ProductComments, ProductSpecifications, Product } from '../../../data/products-data';

// 2. تعریف پراپس‌های صفحه
// این اینترفیس مشخص می‌کند که کامپوننت page چه پراپس‌هایی را از Next.js دریافت می‌کند.
interface ProductDetailPageProps {
  params: {
    id: string; // این 'id' همان مقداری است که از URL (مثلاً /products/1) گرفته می‌شود.
  };
}

// 3. تابع واکشی داده‌ها از API
// این تابع در سمت سرور اجرا می‌شود و مسئول دریافت اطلاعات یک محصول خاص است.
async function getProduct(id: string): Promise<Product | null> {
  // baseUrl باید آدرس اصلی سرور Next.js شما باشد (در حالت توسعه: http://localhost:3000)
  // در محیط Production، Next.js به صورت خودکار به آدرس دامنه شما اشاره می‌کند.
  // استفاده از NEXT_PUBLIC_BASE_URL توصیه می‌شود و باید در فایل .env.local تعریف شود.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  try {
    const apiUrl = `${baseUrl}/api/products/${id}`; // ساخت URL API برای محصول خاص
    console.log(`Fetching product from: ${apiUrl}`); // برای دیباگ کردن

    const res = await fetch(apiUrl, {
      cache: 'no-store', // تضمین می‌کند که هر بار درخواست جدیدی به API زده شود.
    });

    if (res.status === 404) {
      // اگر API پاسخ 404 (Not Found) برگرداند، یعنی محصول پیدا نشده.
      return null;
    }

    if (!res.ok) {
      // اگر پاسخ موفقیت‌آمیز نبود و 404 هم نبود (مثلاً 500 Internal Server Error)
      console.error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch product data for ID: ${id}`);
    }

    const product: Product = await res.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null; // در صورت بروز هرگونه خطا، null برمی‌گردانیم.
  }
}

// 4. کامپوننت اصلی صفحه
// این یک Server Component است که داده‌ها را قبل از رندر شدن به مرورگر واکشی می‌کند.
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // استخراج 'id' محصول از پراپس 'params'
  const productId = params.id;

  // فراخوانی تابع واکشی داده‌ها برای دریافت اطلاعات محصول خاص
  const product = await getProduct(productId);

  // 5. مدیریت وضعیت عدم پیدا شدن محصول (مثلاً 404)
  if (!product) {
    // می‌توانید اینجا یک پیام 'محصول یافت نشد' نمایش دهید
    // یا می‌توانید از 'notFound()' از 'next/navigation' استفاده کنید تا به صفحه 404 Next.js بروید:
    // import { notFound } from 'next/navigation';
    // notFound();
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em', color: '#ff0000' }}>
        <p>متاسفانه، محصول با شناسه "{productId}" پیدا نشد.</p>
        <p>لطفاً شناسه محصول را بررسی کرده یا به صفحه اصلی بازگردید.</p>
        <a href="/" style={{ textDecoration: 'none', color: '#007bff', marginTop: '20px', display: 'inline-block' }}>بازگشت به صفحه اصلی</a>
      </div>
    );
  }

*/
import { NextRequest, NextResponse } from 'next/server';

interface Category {
  id: string;
  nameFa: string;
  nameEn: string;
  slug: string;
}

const CATEGORIES_DATA: Category[] = [
  { id: 'headphone', nameFa: 'هدفون و هندزفری', nameEn: 'Headphones & Earbuds', slug: 'headphones' },
  { id: 'smartwatch', nameFa: 'ساعت هوشمند', nameEn: 'Smartwatches', slug: 'smartwatches' },
  { id: 'powerbank', nameFa: 'پاور بانک', nameEn: 'Power Banks', slug: 'power-banks' },
  { id: 'gaming-console', nameFa: 'کنسول بازی', nameEn: 'Gaming Consoles', slug: 'gaming-consoles' },
  { id: 'accessory', nameFa: 'لوازم جانبی', nameEn: 'Accessories', slug: 'accessories' },
  { id: 'smartband', nameFa: 'مچ بند هوشمند', nameEn: 'Smart Bands', slug: 'smart-bands' },
  { id: 'speaker', nameFa: 'اسپیکر', nameEn: 'Speakers', slug: 'speakers' },
  { id: 'laptop', nameFa: 'لپ‌تاپ', nameEn: 'Laptops', slug: 'laptops' },
  { id: 'tablet', nameFa: 'تبلت', nameEn: 'Tablets', slug: 'tabl2ets' },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(CATEGORIES_DATA, { status: 200 });
}
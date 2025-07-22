// pages/api/categories/index.ts

import type { NextApiRequest, NextApiResponse } from 'next';

// --- Interface for Category Data ---
// Define the shape of a category item
interface Category {
  id: string;   // A unique, programmatic ID for the category (e.g., 'headphone', 'smartwatch').
                // This is often used internally for filtering or routing.
  nameFa: string; // The Persian display name for the category (e.g., 'هدفون و هندزفری').
  nameEn: string; // The English display name for the category (e.g., 'Headphones & Earbuds').
  slug: string; // A URL-friendly string, often used in routing (e.g., 'headphones').
                // This makes URLs like /category/headphones clean.
  // icon?: string; // Optional: path to an icon for the category
  // image?: string; // Optional: path to an image for the category
  // description?: string; // Optional: a short description of the category
}

// --- Mock Category Data ---
// This array holds all the categories that your store supports or plans to support.
// In a real application, this data would typically come from a database.
const CATEGORIES_DATA: Category[] = [
  { id: 'headphone', nameFa: 'هدفون و هندزفری', nameEn: 'Headphones & Earbuds', slug: 'headphones' },
  { id: 'smartwatch', nameFa: 'ساعت هوشمند', nameEn: 'Smartwatches', slug: 'smartwatches' },
  { id: 'powerbank', nameFa: 'پاور بانک', nameEn: 'Power Banks', slug: 'power-banks' },
  { id: 'gaming-console', nameFa: 'کنسول بازی', nameEn: 'Gaming Consoles', slug: 'gaming-consoles' },
  { id: 'accessory', nameFa: 'لوازم جانبی', nameEn: 'Accessories', slug: 'accessories' },
  { id: 'smartband', nameFa: 'مچ بند هوشمند', nameEn: 'Smart Bands', slug: 'smart-bands' },
  { id: 'speaker', nameFa: 'اسپیکر', nameEn: 'Speakers', slug: 'speakers' },
  { id: 'laptop', nameFa: 'لپ‌تاپ', nameEn: 'Laptops', slug: 'laptops' }, // Example of a category with no current products in PRODUCTS_DATA
  { id: 'tablet', nameFa: 'تبلت', nameEn: 'Tablets', slug: 'tablets' },   // Another example
];

// --- API Handler Function ---
// This is the function that runs when a request is made to /api/categories
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[] | { message: string }> // Specifies the expected response type
) {
  // Ensure that only GET requests are processed.
  // This API is meant for retrieving data, not for creating, updating, or deleting.
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' }); // 405 Method Not Allowed
  }

  // In a more complex scenario, you might add filtering, sorting, or pagination here
  // if your list of categories was very long or needed dynamic ordering.
  // For now, we simply return the full list of categories.

  // Return the mock category data with a 200 OK status.
  res.status(200).json(CATEGORIES_DATA);
}
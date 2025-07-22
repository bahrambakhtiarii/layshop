// // pages/api/products/index.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// // IMPORTS from your new data file
// import { PRODUCTS_DATA, Product } from '.././data/products-data'; // <--- Adjust this path if data/products-data.ts is in a different location

// // IMPORTANT: The Product interface (and related ones) should now come from products-data.ts
// // If you move the interfaces to a dedicated types folder, e.g., 'src/types/product.ts',
// // then you would import them from there:
// // import { Product } from '@/src/types/product';
// // and PRODUCTS_DATA from './data/products-data';


// export default function handler(req: NextApiRequest, res: NextApiResponse<Product[] | { message: string }>) {
//   // 1. Method Check
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   let filteredProducts = PRODUCTS_DATA; // Now PRODUCTS_DATA is imported

//   // 2. Extract Query Parameters
//   const { category, brand, minPrice, maxPrice, searchTerm, inventory, color, _limit, _page, _sort, _order } = req.query;

//   // 3. Apply Filters
//   // Filter by Category
//   if (category) {
//     const categories = Array.isArray(category) ? category : [category];
//     filteredProducts = filteredProducts.filter(product =>
//       categories.includes(product.category)
//     );
//   }

//   // Filter by Brand
//   if (brand) {
//     const brands = Array.isArray(brand) ? brand : [brand];
//     filteredProducts = filteredProducts.filter(product =>
//       brands.includes(product.brand)
//     );
//   }

//   // Filter by Minimum Price
//   if (minPrice && typeof minPrice === 'string' && !isNaN(parseFloat(minPrice))) {
//     filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
//   }

//   // Filter by Maximum Price
//   if (maxPrice && typeof maxPrice === 'string' && !isNaN(parseFloat(maxPrice))) {
//     filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
//   }

//   // Filter by Inventory (boolean)
//   if (inventory !== undefined) {
//     const desiredInventoryStatus = String(inventory).toLowerCase() === 'true';
//     filteredProducts = filteredProducts.filter(product => product.inventory === desiredInventoryStatus);
//   }

//   // Filter by Color (case-insensitive and partial match for simplicity)
//   if (color && typeof color === 'string') {
//     const lowerCaseColor = color.toLowerCase();
//     filteredProducts = filteredProducts.filter(product =>
//       product.colors.some(c => c.toLowerCase().includes(lowerCaseColor))
//     );
//   }

//   // Search by Product Title (Fa or En)
//   if (searchTerm && typeof searchTerm === 'string') {
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     filteredProducts = filteredProducts.filter(product =>
//       product.titleFa.toLowerCase().includes(lowerCaseSearchTerm) ||
//       product.titleEn.toLowerCase().includes(lowerCaseSearchTerm) ||
//       product.brand.toLowerCase().includes(lowerCaseSearchTerm) ||
//       product.category.toLowerCase().includes(lowerCaseSearchTerm)
//     );
//   }

//   // 4. Sort (_sort and _order)
//   if (_sort && typeof _sort === 'string') {
//     const sortField = _sort as keyof Product; // Ensure sortField is a valid key of Product
//     const sortOrder = String(_order).toLowerCase() === 'desc' ? 'desc' : 'asc'; // 'asc' by default

//     filteredProducts.sort((a, b) => {
//       const aValue = a[sortField];
//       const bValue = b[sortField];

//       if (typeof aValue === 'number' && typeof bValue === 'number') {
//         return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
//       }
//       if (typeof aValue === 'string' && typeof bValue === 'string') {
//         return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
//       }
//       return 0;
//     });
//   }

//   // 5. Pagination (_limit and _page)
//   let paginatedProducts = filteredProducts;
//   if (_limit && typeof _limit === 'string' && !isNaN(parseInt(_limit))) {
//     const limit = parseInt(_limit);
//     let page = 1;
//     if (_page && typeof _page === 'string' && !isNaN(parseInt(_page))) {
//       page = parseInt(_page);
//     }
//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;
//     paginatedProducts = filteredProducts.slice(startIndex, endIndex);
//   }

//   // 6. Respond
//   if (paginatedProducts.length > 0) {
//     res.status(200).json(paginatedProducts);
//   } else {
//     res.status(404).json({ message: 'No products found matching your criteria.' });
//   }
// }
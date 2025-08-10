// ساختار درست در Next.js 15 برای App Router
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  console.log('Slug:', slug);

  const products = [
    { id: 12, slug: 'phone', title: 'Smartphone' },
    { id: 13, slug: 'laptop', title: 'Laptop' },
  ];

  const product = products.find(p => p.slug === slug);
  if (!product) return notFound();

  return (
    <div>
      <h1>Slug: {slug}</h1>
      <h2>Product Title: {product.title}</h2>
    </div>
  );
}

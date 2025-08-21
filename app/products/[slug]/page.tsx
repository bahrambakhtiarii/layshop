import notFound from './not-found';
import PdComments from '@/components/productpage/PdComments';
import ActionButtons from '@/components/productpage/ActionButtons';
import PdSpecifications from '@/components/productpage/PdSpecifications';
import PdHero from '@/components/productpage/PdHero';
import PdReview from '@/components/productpage/PdReview';


export default async function ProductPage({ params }: { params: { slug: string } }) {

  const { slug } = params;

  const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    return notFound();
  }

  const product = await res.json();

  return (
    <div className="p-4">
      <PdHero 
        id={product.id}
        colors={product.PdColors}
        price={product.price}
        titleFa={product.titleFa}
        titleEn={product.titleEn}
        imFeatures={product.importantFeatures}
        mainImg={product.mainImg}
        pDslidsImg={product.slidsImg}
        cartOptions={product.cartOptions}
        
      />
      <ActionButtons />
      <PdReview longDescription={product.longDescription}/>
      <PdSpecifications specifications={product.productDescription} />
      <PdComments allComents={product.reviews}/>
    </div>
  );
}

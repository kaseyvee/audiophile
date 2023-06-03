import { getCategories } from "@/fetching/getCategories";
import { getProductById } from "@/fetching/getProductById";

import BackButton from "@/components/subcomponents/BackButton";
import ProductCard from "@/components/product/ProductCard";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductGallery from "@/components/product/ProductGallery";
import CategoryList from "@/components/subcomponents/CategoryList";
import BottomBanner from "@/components/BottomBanner";
import ProductRecs from "@/components/product/ProductRecs";

export default async function Product({
  params,
}: {
  params: { productId: string; category: string };
}) {
  const categories = await getCategories();
  const product = await getProductById(params.productId);

  return (
    <main className="product page">
      <div className="top">
        <div className="wrapper">
          <BackButton />
          <ProductCard
            product={product}
          />
          <ProductFeatures
            features={product.features}
            accessories={product.accessories}
          />
          <ProductGallery
            images={[product.imageGallery1, product.imageGallery2, product.imageGallery3]}
          />
        </div>
      </div>

      <div className="bottom">
        <div className="wrapper">
          {/* @ts-expect-error Async Server Component */}
          <ProductRecs />
          <CategoryList categories={categories} />
          <BottomBanner />
        </div>
      </div>
    </main>
  );
}
